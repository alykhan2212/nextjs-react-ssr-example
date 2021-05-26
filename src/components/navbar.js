import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/server-side-render">
            <a>SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/client-side-render">
            <a>CSR</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
