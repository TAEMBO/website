import ExternalLinkSVG from "./ExternalLinkSVG";
import hobbies from '../../hobbies.json' assert { type: "json" };

export default function Hobbies() {
    return (
        <h1 className="block">
            <ul className="hobbies">
                {hobbies.map(hobby => {
                    return (
                        <li className="hobby" key={hobby.linkURL.slice(1)}>
                            {hobby.prefixText}
                            <a href={hobby.linkURL} target="_blank">
                                {hobby.linkText}
                                <ExternalLinkSVG />
                            </a>
                            {hobby.suffixText ?? ""}
                        </li>
                    );
                })}
            </ul>
        </h1>
    );
}
