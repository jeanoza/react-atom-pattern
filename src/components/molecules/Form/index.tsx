const defaultStyle = 'flex flex-col gap-4 bg-inherit'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  formStyle?: string
}
function Form(props: FormProps) {
  const { formStyle, children, ...restProps } = props
  return (
    <form className={`${defaultStyle} ${formStyle ?? ''}`} {...restProps}>
      {children}
    </form>
  )
}

export default Form
