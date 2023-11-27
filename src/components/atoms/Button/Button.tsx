const defaultStyle =
  "py-1 px-2 rounded bg-neutral-700 text-white capitalize hover:opacity-80";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button(props: ButtonsProps) {
  const { label, className, ...restProps } = props;
  return (
    <button className={defaultStyle + " " + className ?? ""} {...restProps}>
      {label}
    </button>
  );
}

export default Button;
