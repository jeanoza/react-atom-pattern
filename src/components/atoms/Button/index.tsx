import { defaultStyle } from './style'

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

function Button(props: ButtonsProps) {
  const { label, className, ...restProps } = props
  return (
    <button className={defaultStyle + ' ' + className ?? ''} {...restProps}>
      {label}
    </button>
  )
}

export default Button
