import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Counld not find requested resource</p>
            <Link href="/">Go back to home</Link>
        </div>
    );
}