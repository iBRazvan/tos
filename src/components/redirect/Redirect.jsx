import React, {useEffect} from 'react'
import { navLinks } from '../../constants'

const Redirect = ({path}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  const navName = navLinks.find((link) => link.id === path)
  useEffect(() => {
    (location.pathname === `/${navName}`) &&
      (setActive(navName),
      setDropdownActive(navName),
      localStorage.removeItem("activeNavLink"),
      localStorage.removeItem("activeDropdownLink"));
  }, [location.pathname]);
}

export default Redirect