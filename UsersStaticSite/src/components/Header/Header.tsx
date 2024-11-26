import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleThemeButton from '../Buttons/ToggleThemeButton/ToggleThemeButton';

function Header(): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(state => !state);
  }

  return (
    <>
      <header id='header' className="flex items-center justify-between md:justify-evenly bg-blue-100 h-24 px-4 md:px-8 w-full" >
        <img src="" alt="TurisMendes-logo" />
        <div className='hidden md:flex items-center gap-20'>
          <nav>
            <ul className='flex gap-6 lg:gap-10'>
              <li>
                <Link to={"/atracoes"} className='text-white-100 leading-8 hover:border-t-4 transition duration-300 pt-8 dark:text-black-100'>
                  Atrações Locais
                </Link>
              </li>
              <li>
                <Link to={"/agentes"} className='text-white-100 leading-8 hover:border-t-4 transition duration-300 pt-8 dark:text-black-100'>
                  Agentes Culturais
                </Link>
              </li>
              <li>
                <Link to={"/mapa"} className='text-white-100 leading-8 hover:border-t-4 transition duration-300 pt-8 dark:text-black-100'>
                  Mapa Interativo
                </Link>
              </li>
              <li>
                <Link to={"#footer"} className='text-white-100 leading-8 hover:border-t-4 transition duration-300 pt-8 dark:text-black-100'>
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='hidden md:flex'>
          <ToggleThemeButton width={80} height={20} />
        </div>
        <button onClick={handleMenuToggle}>
          <img
            src="/src/assets/icons/menu-icon.svg"
            alt="BurgerMenu-logo"
            className='w-8 h-8 object-cover md:hidden'
          />
        </button>
      </header>

      <aside
        className={`fixed top-0 right-0 flex items-center justify-center w-full h-full bg-blue-100 transform ${isMenuOpen ? 'translate-x-full' : '-translate-x-0'
          } transition-transform duration-300 md:hidden`}>
        <div className='flex flex-col items-center'>
          <nav className='mb-10'>
            <button onClick={handleMenuToggle} className="absolute top-8 right-4 text-white text-2xl">
              <img
                src="/src/assets/icons/close-icon.svg"
                alt="close-icon"
                className='w-8 h-8 object-cover'
              />
            </button>
            <ul className='flex flex-col items-center gap-10'>
              <li>
                <Link to={"#"} className='text-white-100 font-semibold text-2xl dark:text-black-100'>
                  Atrações Locais
                </Link>
              </li>
              <li>
                <Link to={"#"} className='text-white-100 font-semibold text-2xl dark:text-black-100'>
                  Agentes Culturais
                </Link>
              </li>
              <li>
                <Link to={"#"} className='text-white-100 font-semibold text-2xl dark:text-black-100'>
                  Mapa Interativo
                </Link>
              </li>
              <li>
                <Link to={"#"} className='text-white-100 font-semibold text-2xl dark:text-black-100'>
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
          <ToggleThemeButton width={100} height={30} />
        </div>
      </aside>
    </>
  );
}

export default Header;
