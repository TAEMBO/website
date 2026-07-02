import styles from "../app/page.module.css";
import Header from "@/components/Header";
import Hobbies from "@/components/Hobbies";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.main}>
            <Header />
            <Hobbies />
			<a href="https://discord.com/users/615761944154210305" target="_blank" title="I can be reached on Discord (@taembo)">
				<Image src="https://cdn.taembo.net/Discord-Symbol-White.svg" alt="logo" height={32} width={32} />
			</a>
        </div>
    );
}
