/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import carInfo from '../data/carInfo.json'
import NavBar from "../data/NavBar.json"
import {Container, Menu, RightMenu, CustomMenu, BurgerNav, CloseWrapper, CustomClose} from '../styles/HeaderStyles'
const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Logo"/>
      </a>
      <Menu>
      {carInfo.map((e) => (
        <a href="#" key={e.id}>{e.title}</a>
      ))}
      </Menu>
      <RightMenu>
        <a>Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)}/>
          </CloseWrapper>
          {NavBar.map((e) => (
          <li key={e.id}>
            <a href="#">{e.title}</a>
          </li>
          ))}
        </BurgerNav>
      </RightMenu>
    </Container>
  );
};

export default Header;