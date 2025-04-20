import styles from "../app/page.module.css";
import Header from "@/components/Header";
import Hobbies from "@/components/Hobbies";

export default function Home() {
    return (
        <div className={styles.bgdiv}>
            <Header />
            <Hobbies />
            <div className={styles.bg}></div>
        </div>
    );
}
