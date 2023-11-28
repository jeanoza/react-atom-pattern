import { defaultStyle } from './style'

interface CardProps extends React.PropsWithChildren {
  cardStyle?: string
}
export default function Card(props: CardProps) {
  const { cardStyle, children } = props
  return <div className={`${defaultStyle} ${cardStyle ?? ''}`}>{children}</div>
}

export function CardListWrapper(list: { label: string; component: JSX.Element }[]) {
  return (
    <div className='flex flex-col items-between gap-4'>
      {list.map((item, index) => (
        <div key={`CardItem[${index}]`} className='flex justify-between items-center w-full'>
          <h3 className='text-lg capitalize'>{item.label}</h3>
          <Card>{item.component}</Card>
        </div>
      ))}
    </div>
  )
}
