import { PropsWithChildren } from 'react'
import Sidebar from '../sidebar/sidebar'
import styles from './layout.module.scss'

export default function PrivateLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<main className={styles.layout}>
			<Sidebar />
			<section>{children}</section>
		</main>
	)
}
