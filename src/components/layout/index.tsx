import Navbar from '../organisms/Navbar'

export enum LayoutStyle {
  default = 'dark:bg-neutral-900 h-screen w-100 text-xs dark:text-white',
  login = 'dark:bg-neutral-900 h-screen w-100 text-xs',
  dashboard = 'dark:bg-neutral-900 h-screen w-100 text-xs'
}

interface LayoutProps extends React.PropsWithChildren {
  layoutStyle?: LayoutStyle
}
export default function Layout({ layoutStyle, children }: LayoutProps) {
  const navlist = ['atom', 'molecule', 'organism']
  return (
    <div className={layoutStyle ?? LayoutStyle.default}>
      <Navbar list={navlist} />
      <main className='w-2/3 m-auto'>{children}</main>
    </div>
  )
}
