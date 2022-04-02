import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom';
import Header from "../Header";
import { colors } from '../../styles'

interface MenuAreaProps {
    displayMenu: boolean;
    connected: boolean,
    address: string,
    chainId: number,
    killSession: () => void,
    openModal: () => void,
}

interface MenuContainerProps {
    status: boolean;
}

const MenuContainer = styled.ul<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    justify-content: space-between;
    z-index: 999 !important;
    @media (max-width: 768px) {
        // max-width: 100%;
        flex-direction: column;
        transform: translateY(${props => props.status ? '-100%' : '75%'});
        background: rgba(${colors.main}, 0.4);
        backdrop-filter: blur(6px);
        width: 92%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid #fff8;
    }
`
const MmenuItem = styled.li`
    font-size: 16px;
    margin: 0 1em;
    color: white;
    @media (max-width: 768px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 9px white, 0 0 2em white, 0 0 1em darkblue;
    }
`

const MenuArea: React.FC<MenuAreaProps> = ({
    killSession,
    openModal,
    displayMenu,
    connected,
    address,
    chainId,
}) => {
    const history = useHistory()
    const smoothScroll = (id: string) => {
        document.querySelector(`#${id}`)?.scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <MenuContainer status={displayMenu}>
            {/* <MmenuItem onClick={() => smoothScroll("gang")}>Jalapeño Gang</MmenuItem> */}
            <MmenuItem onClick={() => history.push("/")}>Home</MmenuItem>
            <MmenuItem onClick={() => history.push("/")}>Upcoming</MmenuItem>
            <MmenuItem onClick={() => history.push("/")}>Past</MmenuItem>
            <MmenuItem onClick={() => history.push("/")}>ProjectE NFT</MmenuItem>
            <MmenuItem onClick={() => history.push("/")}>About</MmenuItem>
        </MenuContainer>
    )
}

export default MenuArea
