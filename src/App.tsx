import Logo from "./components/Logo";
import Hobbies from "./components/Hobbies";
import Heading from "./components/Heading";

export default function App() {
    return (
        <>
            <Heading />
            <br />
            <br />
            <Hobbies />
            <br />
            <Logo />
            <footer>Made with love and React</footer>
        </>
    );
}
