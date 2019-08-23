import Link from "next/link";

const Index = () => (
    <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
        <p>Hello Next.js</p>
    </div>
);

export default Index;
