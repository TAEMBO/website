import styles from "../app/page.module.css";
import React from "react";
import ExternalLinkSVG from "./ExternalLinkSVG";

export default function Hobby({ name, href, description, title }: { name: string; href: string; description: string; title: string }) {
    return (
        <div className={styles.hobby}>
            <h2>
                <a href={href} target="_blank" title={title}>
                    {name}
                    <ExternalLinkSVG />
                </a>
            </h2>
            <p>{description}</p>
        </div>
    );
}
