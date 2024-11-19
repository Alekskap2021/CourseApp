import classNames from "classnames/bind";
import { useEffect, useRef, useState, type FC, type InputHTMLAttributes } from "react";
import s from "./Input.module.scss";

const cn = classNames.bind(s);

interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input: FC<IInputProps> = (props) => {
  const {
    className,
    onChange,
    value,
    type = "text",
    placeholder,
    onFocus,
    onBlur,
    autoFocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
    }
  }, [autoFocus]);

  const calcCaretPosition = () => {
    const inputW = inputRef.current?.clientWidth;
    const caretPos = caretPosition * 9.7;

    if (inputW) {
      if (inputW > caretPos) return `${caretPosition * 9.7}px`;
      else return `${inputW - 9.7}px`;
    } else return `0px`;
  };

  return (
    <label className={s.InputLabel}>
      {placeholder ? <span className={s.placeholder}>{`${placeholder} >`}</span> : null}

      <div className={s.caretWrapper}>
        <input
          className={cn(s.input, className)}
          type={type}
          value={value}
          ref={inputRef}
          autoFocus={autoFocus}
          onChange={(e) => {
            onChange(e.target.value);
            setCaretPosition(e.target.value.length);
          }}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          onSelect={(e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setCaretPosition((e.target as any).selectionStart as number);
          }}
          {...otherProps}
        />

        {isFocused ? <span className={s.caret} style={{ left: calcCaretPosition() }} /> : null}
      </div>
    </label>
  );
};
