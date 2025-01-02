import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

interface AsideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{
    label: string;
    href: string;
  }>;
}

function AsideMenu({ isOpen, onClose, menuItems }: AsideMenuProps): React.ReactNode {
  
  return (
    <aside
        id='mobile-menu'
        className={`fixed top-0 right-0 lg:hidden h-1/2 w-full px-4 md:px-8 pt-2 bg-primary transform transition-transform duration-300 ease-in-out z-40 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        <img
        src="./src/assets/logos/TurisMendes.svg"
        alt="TurisMendes Logo"
        className='w-[105px] h-[60px] mb-5'
      />
        <div className='bg-white w-full h-[1px]' />
        <nav className="my-5">
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <li key={item.label} className="w-fit">
                <a
                  href={item.href}
                  className="text-white font-inter text-base font-bold leading-5"
                  onClick={onClose}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='bg-white w-full h-[1px]' />
        <ThemeSwitcher />
      </aside>
  );
}

export default AsideMenu;
