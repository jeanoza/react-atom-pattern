import { useMemo } from 'react'
import { CardListWrapper } from '../molecules/Card'
import Layout from '../layout'
import { useLocation } from 'react-router-dom'
import Navbar from '../organisms/Navbar'
import LoginForm from '../organisms/Forms/LoginForm'

export default function Organism() {
  const { pathname } = useLocation()

  const list = useMemo(
    () => [
      {
        label: 'Login Form',
        component: <LoginForm />
      },
      {
        label: 'Navbar',
        component: <Navbar list={['Item1', 'Item2', 'Item3']} />
      }
    ],
    []
  )

  return (
    <Layout>
      <h1 className='text-2xl text-center mb-4 mt-8 capitalize'>{pathname.slice(1)}</h1>
      <CardListWrapper list={list} />
    </Layout>
  )
}
