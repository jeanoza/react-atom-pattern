import { useMemo, useState } from 'react'
import Input from '../atoms/Input'
import Card, { CardListWrapper } from '../molecules/Card'
import Layout from '../layout'
import { useLocation } from 'react-router-dom'
import Button from '../atoms/Button'
import Form from '../molecules/Form'

export default function Molecules() {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { pathname } = useLocation()

  const list = useMemo(
    () => [
      {
        label: 'Card',
        component: (
          <Card cardStyle='border'>
            <Input label={'user name'} value={username} setValue={setUsername} placeholder='user name' />
          </Card>
        )
      },
      {
        label: 'form',
        component: (
          <Form onSubmit={() => alert(`email: ${email}, password:${password}`)}>
            <Input label={'email'} value={email} setValue={setEmail} type='email' />
            <Input label={'password'} value={password} setValue={setPassword} type='password' />
            <Button label={'button'} />
          </Form>
        )
      }
    ],
    [username, email, password]
  )

  return (
    <Layout>
      <h1 className='text-xl text-center mb-4 mt-8 capitalize'>{pathname.slice(1)}</h1>
      {CardListWrapper(list)}
    </Layout>
  )
}
