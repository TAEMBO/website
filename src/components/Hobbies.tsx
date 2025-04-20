import Hobby from "@/components/Hobby";
import styles from "../app/page.module.css";
import { HOBBIES } from "@/util/constants";

export default function Hobbies() {
    return (
        <div className={styles.hobbies}>
            {HOBBIES.map((hobby, index) => {
                return <Hobby name={hobby.title} href={hobby.redirect} description={hobby.description} title={hobby.hover} key={index} />;
            })}
        </div>
    );
}
