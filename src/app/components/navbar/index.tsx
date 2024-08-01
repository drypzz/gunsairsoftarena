"use client";

import { useState } from "react";

import ButtonStyled from "../buttonStyled";

import NavItem from "./item";
import { NavbarProps } from "./props";
import { NavbarMenu } from "./menu";

import "./index.style.css";

const Navbar = ({ number }: NavbarProps) => {
    const [navActive, setNavActive] = useState(false);

    return (
        <header>
            <nav className="guns-navbar">
                <a className="guns-navbar-logo" href="/">
                    <img draggable="false" src="/logo/transparent.png" alt="Logo da Guns Airsoft Arena" />
                </a>

                <div onClick={() => setNavActive(!navActive)} className={`${navActive ? "active" : ""} guns-navbar-menu`} id="guns-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`${navActive ? "active" : ""} guns-navbar-list`}>
                    {
                        NavbarMenu.map((e, index) => {
                            return <div onClick={() => {setNavActive(false)}} key={e.text}>
                                <NavItem active={number === index} {...e} />
                            </div>
                        })
                    }
                    <div className="guns-navbar-button">
                        <ButtonStyled number="554796573081" desc="Olá! Gostaria de marcar um game, quais os valores?" text="Reserve Agora" />
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;