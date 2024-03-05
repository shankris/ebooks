import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.logoBox}`}>
        <img src='/img/icons/menu.svg' className={`${classes.headerIcon}`} alt='menu' />
        <div className={`${classes.headerLogo}`}>
          Ebook<span>Library</span>
        </div>
      </div>

      <div className={`${classes.searchBox}`}>
        <input type='text' className={`${classes.search}`} placeholder='Search Ebooks' />
        <div className={`${classes.searchIconContainer}`}>
          <svg id='search' className={`${classes.searchIcon}`} xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24'>
            <path fill='currentColor' fill-rule='evenodd' d='M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004' clip-rule='evenodd' />
          </svg>
        </div>
        <svg id='mic' className={`${classes.iconsRight}`} xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 20 20'>
          <path fill='currentColor' d='M10 13a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3m0-1a2 2 0 0 1-2-2V5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2M5 9.5a.5.5 0 0 1 .5.5a4.5 4.5 0 1 0 9 0a.5.5 0 0 1 1 0a5.5 5.5 0 0 1-5 5.478V17.5a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 4.5 10a.5.5 0 0 1 .5-.5' />
        </svg>
      </div>

      <div className={`${classes.iconBox}`}>
        <svg id='search' className={`${classes.searchResponsive}`} xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24'>
          <path fill='currentColor' fill-rule='evenodd' d='M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004' clip-rule='evenodd' />
        </svg>

        <svg id='sun' className={`${classes.iconsRight}`} xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='-2 -2 24 24'>
          <path fill='currentColor' d='M10 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2m16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2m.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M5.757 14.243a1 1 0 0 1 0 1.414L4.343 17.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 2.929l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343A1 1 0 0 1 4.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414' />
        </svg>

        <svg id='notification' className={`${classes.iconsRight}`} xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 32 32'>
          <path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 17c0-5 1-11 8-11s8 6 8 11s3 8 3 8H5s3-3 3-8m12 8s0 4-4 4s-4-4-4-4m4-22v3' />
        </svg>

        <svg id='user' className={`${classes.iconsRight}`} xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24'>
          <path fill='currentColor' fill-rule='evenodd' d='M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8M2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12m10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2c1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7' clip-rule='evenodd' />
        </svg>
      </div>
    </header>
  );
};

export default Header;
