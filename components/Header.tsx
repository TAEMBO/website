"use client";

import styles from "../app/page.module.css";
import Hobbies from "./Hobbies";
import Image from "next/image";

export default function Header({ description }: { description: string }) {
    return (
        <div className={styles.bgdiv}>
            <header className={styles.header}>
                <section>
                    <h1> TÆMBØ </h1>
                    <p>{description}</p>
                </section>
                <Image src="https://cdn.taembo.net/pfp.png" alt="logo" height={256} width={256} />
            </header>
            <Hobbies />
            <div className={styles.bg}></div>
        </div>
    );
}
