import Link from 'next/link'
export default function SecondPage() {
    return (
        <>
            <h1>Second Page</h1>
            <Link href="/">
                <a>
                    <h2>Back to index</h2>
                </a>
            </Link> 
        </>
    )
}