import { useCallback, useState } from 'react'
import Form from '../../../molecules/Form'
import Input from '../../../atoms/Input'
import Button from '../../../atoms/Button'
import { defaultWrapperStyle } from '../style'
import Card from '../../../molecules/Card'

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
      <Card cardStyle='border'>
        <Form onSubmit={handleOnSubmit}>
          <Input label='name' value={data.name} setValue={name => setData({ ...data, name })} />
          <Input label='email' value={data.email} setValue={email => setData({ ...data, email })} />
          <div className='flex justify-end w-100'>
            <Button type='submit' label='login' />
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default LoginForm
