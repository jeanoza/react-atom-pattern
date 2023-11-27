interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const defaultStyle =
  "py-1 px-2 rounded bg-neutral-700 text-white capitalize hover:opacity-80";

function Button(props: ButtonsProps) {
  const { label, className, ...restProps } = props;
  return (
    <button {...restProps} className={defaultStyle + " " + className ?? ""}>
      {label}
    </button>
  );
}

export default Button;
