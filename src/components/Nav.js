import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link href="/" className="logo">Lucas Colombo</Link>
        <ul className="nav-links">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#portfolio">Portfolio</Link></li>
          <li><Link href="/#instagram">Instagram</Link></li>
        </ul>
      </div>
    </nav>
  );
}
