import Layout from '../layout'
import tree from '../../assets/images/tree.png'
import { CardListWrapper } from '../molecules/Card'

const list = [
  {
    label: 'tree',
    component: <img className='w-full' src={tree} alt='tree' />
  }
]

export default function Home() {
  return (
    <Layout>
      <div className='mt-10'>
        <CardListWrapper list={list} />
      </div>
    </Layout>
  )
}
