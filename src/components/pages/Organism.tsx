import { useState } from 'react'
import Input from '../atoms/Input'
import Card from '../molecules/Card'
import Layout from '../layout'
import { useLocation } from 'react-router-dom'

export default function Organisms() {
  const [username, setUsername] = useState<string>('')
  const { pathname } = useLocation()

  return (
    <Layout>
      <h1 className='text-xl text-center mb-4 mt-8 capitalize'>{pathname.slice(1)}</h1>
      <div className='flex justify-center items-center'>
        <Card>
          <Input label={'user name'} value={username} setValue={setUsername} />
        </Card>
      </div>
    </Layout>
  )
}
