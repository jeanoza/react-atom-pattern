const defaultStyle = 'flex flex-col gap-4'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
function Form(props: FormProps) {
  const { children, ...restProps } = props
  return (
    <form className={defaultStyle} {...restProps}>
      {children}
    </form>
  )
}

export default Form
