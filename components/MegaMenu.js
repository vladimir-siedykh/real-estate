import React, { useState } from 'react';

const MegaMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <li className='relative'>
      <button
        id='megamenu-item-1'
        className='text-lg font-semibold focus:outline-none'
        onClick={handleSubMenuToggle}
        aria-expanded={showSubMenu}
      >
        Applications
      </button>
      {showSubMenu && (
        <div
          className='absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2'
          onMouseLeave={handleMouseLeave}
        >
          <div className='text-lg font-semibold ml-4 mt-2'>Applications</div>
          <div className='grid grid-cols-3 gap-4 p-4'>
            <a
              id='megamenu-box-10'
              href='https://kinsta.com/application-hosting/'
              className='group'
              onMouseEnter={() => handleMouseEnter('megamenu-box-10')}
              onFocus={() => handleMouseEnter('megamenu-box-10')}
            >
              <div className='text-base font-semibold group-hover:text-blue-600'>
                Features
              </div>
              <div className='text-sm text-gray-500 group-hover:text-blue-400'>
                Deploy apps in minutes
              </div>
            </a>
            <a
              id='megamenu-box-11'
              href='https://kinsta.com/application-hosting/pricing/'
              className='group'
              onMouseEnter={() => handleMouseEnter('megamenu-box-11')}
              onFocus={() => handleMouseEnter('megamenu-box-11')}
            >
              <div className='text-base font-semibold group-hover:text-blue-600'>
                Pricing
              </div>
              <div className='text-sm text-gray-500 group-hover:text-blue-400'>
                Transparent, usage-based pricing
              </div>
            </a>
            <a
              id='megamenu-box-12'
              href='https://kinsta.com/docs/application-hosting/'
              className='group'
              onMouseEnter={() => handleMouseEnter('megamenu-box-12')}
              onFocus={() => handleMouseEnter('megamenu-box-12')}
            >
              <div className='text-base font-semibold group-hover:text-blue-600'>
                Docs
              </div>
              <div className='text-sm text-gray-500 group-hover:text-blue-400'>
                Quick starts and feature guides
              </div>
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

export default MegaMenu;
