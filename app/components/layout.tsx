import type { PropsWithChildren } from 'react';
import { Link } from 'react-router';

export default function Layout({ children }: PropsWithChildren) {
  const menus = [
    { name: 'Home', path: '/' },
    { name: 'Detail', path: '/detail' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white p-4 flex items-end gap-4">
        <h1 className="text-2xl leading-none">Header</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            {menus.map((menu) => (
              <li key={menu.path} className="flex">
                <Link to={menu.path} className="leading-none">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white p-4">
        <h1 className="text-xl">Footer</h1>
      </footer>
    </div>
  );
}
