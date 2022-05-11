import Link from 'next/link'
export default function FirstPage() {
    return (
        <>
            <h1>FirstPage</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
        

    )
}