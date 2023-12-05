import { ChangeEvent, SyntheticEvent, useCallback } from 'react'
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

  const toggleFocusBlur = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const { target, type } = e

    if (target) {
      const { classList } = (target as HTMLElement).closest('div')?.querySelector('label') as HTMLElement
      if (type === 'blur' && (target as HTMLInputElement).value === '') {
        classList.add('text-base')
      } else {
        classList.remove('text-base')
      }
    }
  }, [])

  return (
    <input
      {...restProps}
      className={`${defaultInputStyle} ${inputStyle ?? ''}`}
      id={label}
      value={value}
      onChange={handleOnChange}
      onFocus={toggleFocusBlur}
      onBlur={toggleFocusBlur}
    />
  )
}

function Label(props: InputProps) {
  const { label, labelStyle } = props
  return (
    <label htmlFor={label} className={`${defaultLabelStyle} ${labelStyle ?? ''}`}>
      {label}
    </label>
  )
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
