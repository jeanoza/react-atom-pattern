interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
function Form(props: FormProps) {
  const { children, ...restProps } = props;
  // console.log(restProps);
  return <form {...restProps}>{children}</form>;
}

export default Form;
