import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import media from 'styled-media-query'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import Item from './item'
import logo from '../../assets/logo-small.svg'
import logoLarge from '../../assets/logo-large.svg'
import SocialIcons from '../social-icons'

const NavBar = () => {
  const [show, setShow] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const handleScroll = () => {
    if (!mobileMenuIsOpen) {
      setScrollPosition(document.body.getBoundingClientRect().top)
      setShow(document.body.getBoundingClientRect().top > scrollPosition)
    }
  }

  if (typeof window !== 'undefined') {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    })
  }

  return (
    <Transition>
      <Desktop>
        <LogoDesktopLarge to="/">
          <img src={logoLarge} alt="Humancrafted logo" />
        </LogoDesktopLarge>
        <Logo to="/">
          <img src={logo} alt="Humancrafted logo" />
        </Logo>
        <Header className={show ? 'active' : 'hidden'}>
          <List>
            <Item to="/about" text="About" />
            <Item to="/what-we-do" text="What we do" />
            <Item to="/work-with-us" text="Work with us" />
          </List>
        </Header>
      </Desktop>
      <Mobile>
        <Header className={show ? 'active' : 'hidden'}>
          <MenuWrapper>
            <Menu
              onStateChange={({ isOpen }) => setMobileMenuIsOpen(isOpen)}
              width="100%"
              right
            >
              <Item to="/" text="Home" />
              <Item to="/about" text="About" />
              <Item to="/what-we-do" text="What we do" />
              <Item to="/work-with-us" text="Work with us" />
              <SocialIcons />
            </Menu>
          </MenuWrapper>
          <LogoMobile to="/">
            <img src={logoLarge} alt="Humancrafted logo" />
          </LogoMobile>
        </Header>
      </Mobile>
    </Transition>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Header = styled.header`
  position: fixed;
  height: 60px;
  background-color: ${p => p.theme.colors.primary};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${media.greaterThan('medium')`
    height: 90px;
    left: 50px;
    margin-top: 5px;
  `};
  ${media.greaterThan('large')`
    padding-left: 180px;
  `};
`

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`

const Desktop = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`

const LogoDesktopLarge = styled(Link)`
  display: none;
  ${media.greaterThan('large')`
    display: flex;
  `};
  width: 140px;
  height: 90px;
  align-items: center;
  margin-left: 20px;
  padding-bottom: 3px;
  img {
    width: 140px;
    position: fixed;
    z-index: 1000;
    padding: 0;
    margin: 0;
  }
`

const Mobile = styled.div`
  display: block;
  ${media.greaterThan('medium')`
    display: none;
    `}
`

const MenuWrapper = styled.div`
  .bm-burger-button {
    position: fixed;
    right: 0;
    width: 25px;
    height: 20px;
    margin-top: -13px;
    margin-right: 15px;
  }

  .bm-burger-bars,
  .bm-burger-bars-hover {
    background: white;
  }

  .bm-cross {
    background: white;
  }

  .bm-menu {
    background: black;
    padding: 2.5em 1.5em 0;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .bm-menu-wrap {
    margin-top: -30px;
  }
`

const Logo = styled(Link)`
  ${media.greaterThan('large')`
    display: none;
   `};
  width: 22px;
  height: 90px;
  display: flex;
  align-items: center;
  img {
    position: fixed;
    height: 22px;
    width: 22px;
    z-index: 1000;
    margin: 0 20px;
  }
`

const LogoMobile = styled(Link)`
  width: 140px;
  margin: 0px 15px;
  img {
    padding: 0;
    margin: 0;
  }
`
