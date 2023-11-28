import { useMemo, useState } from 'react'
import Input from '../atoms/Input'
import { CardListWrapper } from '../molecules/Card'
import Layout from '../layout'
import { useLocation } from 'react-router-dom'
import Button from '../atoms/Button'

export default function Atom() {
  const [username, setUsername] = useState<string>('')
  const { pathname } = useLocation()

  const list = useMemo(
    () => [
      {
        label: 'input',
        component: <Input label={'user name'} value={username} setValue={setUsername} placeholder='user name' />
      },
      {
        label: 'button',
        component: <Button label={'button'} />
      }
    ],
    [username]
  )

  return (
    <Layout>
      <h1 className='text-2xl text-center mb-4 mt-8 capitalize'>{pathname.slice(1)}</h1>
      {CardListWrapper(list)}
    </Layout>
  )
}
