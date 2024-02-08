import Logo from "./components/Logo";
import Hobbies from "./components/Hobbies";

export default function App() {
    return (
        <>
            <header className="block">sus</header>
            <h2 className="block">
                We do quite a considerable amount of mental trickery and mockery of those who are unfortunate enough to fall victim to our clever little trap of social teasing
            </h2>
            <br />
            <h3 className="block">
                <s>Sorry dark mode users, coming soon&trade;</s> dark mode woooo (but now no light mode)
            </h3>
            <Hobbies />
            <br />
            <Logo />
            <footer>Made with love and React</footer>
        </>
    );
}
