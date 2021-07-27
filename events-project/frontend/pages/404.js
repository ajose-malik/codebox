import Link from "next/link";
import { Icon } from "react-icons-kit";
import { exclamationTriangle } from "react-icons-kit/fa/exclamationTriangle";
import Layout from "@components/Layout";
import styles from "@styles/404.module.css";

export default function PageNotFound() {
	return (
		<Layout title="Page Not Found">
			<div className={styles.error}>
				<h1>
					{" "}
					<Icon icon={exclamationTriangle} size={"40px"} /> 404
				</h1>
				<h4>Sorry, there is nothing here</h4>
				<Link href="/">Back to Home</Link>
			</div>
		</Layout>
	);
}
