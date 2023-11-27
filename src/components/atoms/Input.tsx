import { ChangeEvent, useCallback } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: (value: string) => void;
}
function Input(props: InputProps) {
  const { label, value, setValue } = props;

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className="flex gap-1 justify-between">
      <label className="capitalize">{label}</label>
      <input
        className="border dark:text-neutral-900"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
