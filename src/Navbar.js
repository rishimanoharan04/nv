export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">
                Milantis
            </a>
            <ul>
                <li>
                    <a href="/pricing">Data</a>
                </li>
                <li>
                    <a href="/about">File Upload</a>
                </li>
            </ul>
        </nav>
    )
}