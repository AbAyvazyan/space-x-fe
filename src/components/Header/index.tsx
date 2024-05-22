import logo from '@assets/images/spaceX.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const path = window.location.pathname;
  const isAdmin = path.includes('admin');

  return (
    <header
      className={`w-full h-28 absolute border-s-neutral-400 border bg-transparent lg:px-16 md:px-12 sm:px-8 px-4 top-0 flex items-center justify-evenly z-50 ${isAdmin ? 'hidden' : 'block'}`}>
      <NavLink to="/" className="w-fit h-full border border-x-neutral-50">
        <img src={logo} alt="space-x-logo" className="w-60 h-fit" />
      </NavLink>
      <nav className="h-full flex items-center gap-6">
        <button className="capitalize px-4 py-2 text-neutral-200 transition-all hover:text-neutral-400 hover:border-b-neutral-400">
          главная
        </button>
        <button className="capitalize px-4 py-2 text-neutral-200 transition-all hover:text-neutral-400 hover:border-b-neutral-400">
          технология
        </button>
        <button className="capitalize px-4 py-2 text-neutral-200 transition-all hover:text-neutral-400 hover:border-b-neutral-400">
          графика полётов
        </button>
        <button className="capitalize px-4 py-2 text-neutral-200 transition-all hover:text-neutral-400 hover:border-b-neutral-400">
          гарантия
        </button>
        <button className="capitalize px-4 py-2 text-neutral-200 transition-all hover:text-neutral-400 hover:border-b-neutral-400">
          о компании
        </button>
        <button className="capitalize px-4 py-2 text-neutral-200 transition-all hover:text-neutral-400 hover:border-b-neutral-400">
          контакты
        </button>
      </nav>
    </header>
  );
};

export default Header;
