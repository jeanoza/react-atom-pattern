import { useCallback, useState } from 'react'
import Form from '../../../molecules/Form'
import Input from '../../../atoms/Input'
import Button from '../../../atoms/Button'
import { defaultWrapperStyle } from '../style'

interface LoginFormData {
  name: string
  email: string
}

interface LoginFormProps {
  wrapperStyle?: string
}
function LoginForm(props: LoginFormProps) {
  const { wrapperStyle } = props
  const [data, setData] = useState<LoginFormData>({ name: '', email: '' })

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      //FIXME: put service logic
      alert(`LoginForm => ${JSON.stringify(data)}`)
    },
    [data]
  )

  return (
    <div className={`${defaultWrapperStyle} ${wrapperStyle ?? ''}`}>
      <div>LoginForm</div>
      <Form onSubmit={handleOnSubmit}>
        <Input
          label='name'
          value={data.name}
          setValue={name => setData({ ...data, name })}
          wrapperStyle='border border-red-200'
        />
        <Input label='email' value={data.email} setValue={email => setData({ ...data, email })} />
        <div className='flex justify-end w-100 my-'>
          <Button type='submit' label='login' />
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
