import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import FavButton from './FavButton';
import SignIn from './SignIn';
import MobileMenu from './MobileMenu';
const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-b-black/20'>
      <Container className='flex intems-center justify-between
      text-light-color '> 
        <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
        <MobileMenu />
        <Logo />
        </div>
        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <FavButton />
          <SignIn />
        </div>
      </Container>
    </header>
  )
}

export default Header;
