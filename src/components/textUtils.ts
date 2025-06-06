// prettier-ignore
export const makeClassName = (setting: string, _className?: string, numberOfLines?: number) => {
    return [
        setting,
        numberOfLines ? `line-clamp-${numberOfLines}` : '',
        _className
    ].join(' ')
}