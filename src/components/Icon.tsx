import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type IconProps = ReactSpanProps & {
  name: string
}

// prettier-ignore
export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  // console.log(`Icon: className = ${className}, name = ${name}, props = ${JSON.stringify(props)}`)
  return <span {...props} className={className}>{name}</span>
}
