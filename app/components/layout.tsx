import { useQuery } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { Link } from 'react-router';
import { getUserById } from '~/apis/users';

function Header() {
  const { data: user } = useQuery(getUserById(1));

  const menus = [
    { name: 'Home', path: '/' },
    { name: 'Detail', path: '/detail' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white p-4 flex items-center justify-between">
      <nav className="flex items-end gap-4">
        <h1 className="text-2xl leading-none">Header</h1>
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
      {user && (
        <div className="flex items-center gap-2 ml-auto">
          <img src={user.image} alt="Profile" className="w-8 h-8 rounded-full" />
          <span>{user.username}</span>
        </div>
      )}
    </header>
  );
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white p-4">
        <h1 className="text-xl">Footer</h1>
      </footer>
    </div>
  );
}
