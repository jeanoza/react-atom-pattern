import { ChangeEvent, useCallback } from "react";
import {
  defaultInputStyle,
  defaultLabelStyle,
  defaultWrapperStyle,
} from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  inputStyle?: string;
  labelStyle?: string;
  wrapperStyle?: string;
  setValue: (value: string) => void;
}

function Input(props: InputProps) {
  const { value, setValue, inputStyle, ...restProps } = props;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <input
      className={defaultInputStyle + " " + inputStyle ?? ""}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
}

function Label(props: InputProps) {
  const { label, labelStyle } = props;
  return (
    <label className={defaultLabelStyle + " " + labelStyle ?? ""}>
      {label}
    </label>
  );
}

function InputWrapper(props: InputProps) {
  const { wrapperStyle } = props;

  return (
    <div className={defaultWrapperStyle + " " + wrapperStyle ?? ""}>
      <Label {...props} />
      <Input {...props} />
    </div>
  );
}
export default InputWrapper;
