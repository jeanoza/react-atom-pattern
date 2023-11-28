import { Link } from 'react-router-dom'
import logo_black from '../../../assets/images/42_black.png'

interface NavbarProps {
  list: string[]
}

export default function Navbar(props: NavbarProps) {
  const { list } = props
  return (
    <nav className='flex items-center justify-between bg-neutral-800 px-2 text-neutral-100'>
      <Link to='/' className='w-32'>
        <img src={logo_black} alt='42 logo' width={42} />
      </Link>
      <ul className='flex items-center justify-center gap-2 w-screen capitalize py-4'>
        {list.map((item, index) => (
          <Link to={'/' + item} key={`navItem[${index}]`}>
            <li className='hover:opacity-80'>{item}</li>
          </Link>
        ))}
      </ul>
      <div className='w-32'></div>
    </nav>
  )
}
