import React, { useState, useRef, useEffect } from "react";

const Input = props => {
  
  const [position, setPosition] = useState(0);
  const { mask, inputValue, setInputValue, placeholder, maskedChar } = props;
  const GlRef = useRef();
  const back = useRef(false);
  const adjustCursor = useRef(false);

  const toMaskPattern = event => {
    const value = event.target.value;

    if (!mask) {
      return value;
    }

    if (mask) {
      const newValue = [];
      const patternChars = mask.filter(m => !(m instanceof RegExp));
      console.log('patternChars', patternChars)
      const unMaskedValue = value
        .split("")
        .filter(v => !patternChars.includes(v))
        .filter(v => v !== maskedChar && v !== ' ' && v !== '\u2009');
      console.log('unMaskedValue', unMaskedValue)
      const selectionStart = event.target.selectionStart;
      const backSpace =
        (inputValue?.length > 0 && value.length < inputValue?.length) ?? false;
      let vIdx = 0;
      back.current = backSpace;
      adjustCursor.current = false;

      for (const m of mask) {
        if (backSpace && !unMaskedValue[vIdx]) {
          break;
        }

        if (m instanceof RegExp) {
          if (unMaskedValue[vIdx] && unMaskedValue[vIdx].match(m)) {
            newValue.push(unMaskedValue[vIdx]);
            vIdx++;
          } else {
            break;
          }
        } else {
          newValue.push(m);
        }
      }

      if (backSpace || selectionStart + patternChars.length < newValue.length) {
        adjustCursor.current = true;
        setPosition(selectionStart);
      }

      return newValue.join("");
    }

    return value;
  };

  const handleChange = e => {
    GlRef.current = e.target;
    const newValue = toMaskPattern(e);
    setInputValue(newValue);
  };

  useEffect(() => {
    if (mask && adjustCursor.current) {
      GlRef.current.setSelectionRange(position, position);
    }
  }, [inputValue, position, mask]);

  return (
    <input type="text" onChange={handleChange} value={inputValue} placeholder={placeholder} />
  );
};

export default Input;
