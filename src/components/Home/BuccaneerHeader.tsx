import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LogoArea from './LogoArea'
import MenuArea from './MenuArea'
import SocialLinkArea from './SocialLinkArea'
import ToggleMenuIcon from './ToggleMenuIcon'
import { colors } from '../../styles'

const Wrapper = styled.div`
    // position: absolute;
    // top:0;
    // left:0;
    width: 100%;
    // max-width: 1440px;
    // margin: 0 auto;
    height: 100px;
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2%;
    @media screen and (max-width: 1330px) {
        width: 100%;
        height: 65px;
        margin: 0;
        padding-left:2%;
        padding-right:2%; 
    }
    border-bottom: 1px solid #ffffff4f;
    z-index: 999 !important;
`
const MenuWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2%;
    align-items: center;
    @media screen and (max-width: 1330px) {
        width: 100%;
        height: 65px;
        margin: 0;
        padding-left:2%;
        padding-right:2%; 
    }
`
const Common = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LoginButton = styled(Common) <{ w?: string, h?: string, mt?: string }>`
    width: ${props => props.w ? props.w : '186px'};
    height: ${props => props.h ? props.h : '52px'};
    border-radius: 4px;
    background: ${colors.btnColor};
    color: white;
    cursor: pointer;
    z-index: 9;
    font-weight: bold;
    margin-top: ${props => props.mt ? props.mt : 0};
    @media screen and (max-width: 768px) {
        margin-right: 40px;
    }
    &:hover {
        opacity: 0.85;
    }
    &:active {
        transform: translateY(1px);
    }
`
interface Props {
    connect: () => void,
    setIsHide: (e: any) => void,
    isHide: boolean,
    connected: boolean,
    address: string,
    chainId: number,
    killSession: () => void
}

const BuccaneerHeader: React.FC<Props> = ({
    connect,
    killSession,
    setIsHide,
    isHide,
    connected,
    address,
    chainId,
}) => {
    const [currentWidth, setCurrentWidth] = useState(0)
    useEffect(() => {
        function updateSize() {
            setCurrentWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    useEffect(() => {
        setIsHide(true)
        // eslint-disable-next-line
    }, [currentWidth]);
    return (
        <Wrapper>
            <MenuWrapper>
                <LogoArea />
                <MenuArea
                    displayMenu={isHide}
                    connected={connected}
                    address={address}
                    chainId={chainId}
                    killSession={killSession}
                    openModal={connect}
                />
                <LoginButton h="40px">Dashboard</LoginButton>
                {/* <SocialLinkArea openModal={connect} connected={connected} /> */}
                <ToggleMenuIcon openMenu={() => setIsHide(!isHide)} />
            </MenuWrapper>
        </Wrapper>
    )
}

export default BuccaneerHeader
