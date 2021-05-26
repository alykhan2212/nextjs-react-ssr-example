import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <ul>
      <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            <a>SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/csr">
            <a>CSR</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
