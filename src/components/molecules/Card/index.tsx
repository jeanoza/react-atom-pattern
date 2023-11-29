import { defaultStyle } from './style'

interface CardProps extends React.PropsWithChildren {
  cardStyle?: string
}
export default function Card(props: CardProps) {
  const { cardStyle, children } = props
  return <div className={`${defaultStyle} ${cardStyle ?? ''}`}>{children}</div>
}

interface CardListWrapperProps {
  list: { label: string; component: JSX.Element }[]
}

export function CardListWrapper({ list }: CardListWrapperProps) {
  return (
    <div className='flex flex-col gap-4'>
      {list.map((item, index) => (
        <div
          key={`CardItem[${index}]`}
          className='flex justify-between items-center m-auto max-w-3xl w-full gap-4 overflow-auto'
        >
          <h3 className='text-lg capitalize'>{item.label}</h3>
          <Card>{item.component}</Card>
        </div>
      ))}
    </div>
  )
}
