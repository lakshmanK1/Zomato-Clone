import React from 'react'


// Styled-components
import { HeadDiv, Image, LogoDiv, SearchBar, SearchDiv, NavDiv, NavLink, LocationDiv, RestaurantDiv } from './HeaderStyles'

// icons
import {ImLocation2} from 'react-icons/im';
import {BsSearch} from 'react-icons/bs';

function Header() {
  return (
    <HeadDiv>
        <LogoDiv>
            <Image src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" tabindex="0"/>
            <SearchDiv>
              <LocationDiv>
              <ImLocation2 style={{color:'red',height:'18px',width:"18px"}}/>
              <SearchBar type='text' placeholder='search for location..' />
              </LocationDiv>
              <RestaurantDiv>
              <BsSearch style={{height:'18px',width:"18px"}}/>
              <SearchBar type='text' placeholder='search for restaurant..' />
              </RestaurantDiv>
            </SearchDiv>
            <NavDiv>
                <NavLink>LOGIN</NavLink>
                <NavLink>SIGN UP</NavLink>
            </NavDiv>
        </LogoDiv>
    </HeadDiv>
  )
}

export default Header