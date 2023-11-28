import { ChangeEvent, useCallback } from 'react'
import { defaultInputStyle, defaultLabelStyle, defaultWrapperStyle } from './style'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  inputStyle?: string
  labelStyle?: string
  wrapperStyle?: string
  setValue: (value: string) => void
}

function Input(props: InputProps) {
  const { value, setValue, inputStyle, placeholder, label, ...restProps } = props

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  return (
    <input
      {...restProps}
      className={`${defaultInputStyle} ${inputStyle ?? ''}`}
      value={value}
      onChange={handleOnChange}
      placeholder={placeholder ?? label}
    />
  )
}

function Label(props: InputProps) {
  const { label, labelStyle } = props
  return <label className={`${defaultLabelStyle} ${labelStyle ?? ''}`}>{label}</label>
}

function InputWrapper(props: InputProps) {
  const { wrapperStyle, ...restProps } = props

  return (
    <div className={`${defaultWrapperStyle} ${wrapperStyle ?? ''}`}>
      <Label {...restProps} />
      <Input {...restProps} />
    </div>
  )
}
export default InputWrapper
