import Link from 'next/link';

const About = () => (
    <div>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
        <p>This is the about page</p>
    </div>
);

export default About;