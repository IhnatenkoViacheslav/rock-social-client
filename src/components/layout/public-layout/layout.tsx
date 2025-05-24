import { PropsWithChildren } from 'react'

export default function PublicLayout({ children }: PropsWithChildren<unknown>) {
	return <div>{children}</div>
}
