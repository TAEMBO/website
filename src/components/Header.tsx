"use client";

import styles from "../app/page.module.css";
import Image from "next/image";
import { DESCRIPTION, TITLE } from "@/util/constants";

export default function Header() {
    return (
        <header className={styles.header}>
            <section>
                <h1>{TITLE}</h1>
                <p>{DESCRIPTION}</p>
            </section>
            <Image src="https://cdn.taembo.net/pfp.png" alt="logo" height={256} width={256} />
        </header>
    );
}
