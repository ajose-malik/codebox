import Link from "next/link"

import styles from "../styles/Footer.module.css"

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<p>Copyright &copy; DJ Events 2021</p>
				<p>
					<Link href="/about">About This Project</Link>
				</p>
			</header>
		</>
	)
}
