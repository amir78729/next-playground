'use client'

type Props = {
    children: React.ReactNode
}

export const TapsiWebComponentsProvider = ({children}: Props) => {
    return (
        <>{children}</>
    )
}