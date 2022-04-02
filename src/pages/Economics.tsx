import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";

import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import PageLoader from "../components/Home/PageLoader";
import Label from "../components/Label"
import Footer from "../components/Footer"

import mail from '../assets/images/mail.png'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import tokenomicsImg from '../assets/images/nft2.png'
import transaction from '../assets/images/transaction.png'
import liquidity from '../assets/images/liquidity.png'
import holders from '../assets/images/holders.png'
import nft1 from '../assets/images/nft1.png'
import nft2 from '../assets/images/nft2.png'
import nft3 from '../assets/images/nft3.png'
import nft4 from '../assets/images/nft4.png'
import nft5 from '../assets/images/nft5.png'
import nft6 from '../assets/images/nft6.png'
import nft7 from '../assets/images/nft7.png'
import nft8 from '../assets/images/nft8.png'
import imgList1 from '../assets/images/imgList1.png'
import imgList2 from '../assets/images/imgList2.png'
import imgList3 from '../assets/images/imgList3.png'
import imgList4 from '../assets/images/imgList4.png'
import imgList5 from '../assets/images/imgList5.png'
import imgList6 from '../assets/images/imgList6.png'

import "./particle.css";

const useStyles = makeStyles((theme) => ({

  motherWrap: {
    position: "relative",
    width: "100%",
    left: 0,
    right: 0,
    backgroundSize: "cover",
    padding: 0,
  },
  sectionTwo: {
    marginTop: 50,
    marginBottom: 85,
    // padding: "0 1em",
    zIndex: 3,
  },
  communityArea: {
    padding: '0px'
  },
  sectionThree: {
    margin: "150px 0"
  },
  EcoTitle: {
    marginTop: 100,
  },
  itemList: {
    margin: '70px 0'
  },
  howtoget: {
    display: "flex",
    justifyContent: 'flex-end',
  }
}));


interface Props {
  connect: () => void;
  setIsHide: (e: any) => void;
  killSession: () => void;
  isHide: boolean;
  connected: boolean;
  address: string;
  chainId: number;
}

const Common = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.p`
  font-size: 56px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 0;
  @media (max-width: 960px) {
    font-size: 30px;
  }
`
export const SubTitle = styled.p<{ alignCenter?: boolean }>`
  font-size: 16px;
  color: #FFFA;
  text-align: ${props => props.alignCenter ? 'center' : 'left'};
  font-family: "Poppins-Regular";
  @media (max-width: 960px) {
    font-size: 14px;
  }
`
const MudiCard = styled.div<{ alignCenter?: boolean }>`
  width: 100%;
  min-height: 230px;
  padding: 40px;
  box-shadow: 0px 0px 15px #0007;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignCenter ? 'center' : 'left'};
`
const TokenCard = styled(MudiCard)`
  align-items: center;
  justify-content: center;
  img {
    width: 94px;
    margin-bottom: 53px;
  }
`
const CommunityCard = styled(MudiCard)`
  border: 1px solid #2C2F32;
  background: #25282C;
  align-items: center;
  box-shadow: none;
`
const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SocialWrapper = styled(SpaceBetween)`
  width: 168px;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-evenly;
  }
  img {
    cursor: pointer;
  }
`
export const TokenomicsImage = styled.img`
  height: 100%;
  max-height: 406px;
  @media (max-width: 1200px) {
    max-height: 300px;
    margin: 0 auto;
  }
`
export const SectionThreeWrapper = styled.div`
  min-height: 406px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  img {
    width: 98px;
    height: 98px;
    border-radius: 49px;
    margin: 1em 0;
  }
`
export const ListItem = styled.li`
  list-style-type: square;
  list-style-position: inside;
  color: #fffa;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
const MarqueeArea = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 120px;
  overflow-x: hidden;
  // border: 1px solid red;
`
const marquee = () => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }  
`
const Track = styled.div`
  position: absolute;
  display: flex;
  white-space: nowrap;
  will-change: transform;
  animation: ${marquee} 32s linear infinite;
`
const Track1 = styled(Track)`
  animation: ${marquee} 52s linear infinite;
`
const ImageWrapper = styled(Common)`
  width: 303px;
  height: 74px;
  border-radius: 8px;
  border: 1px solid #2C2F32;
  background: #25282C;
  margin: 15px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`

const Economics = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const classes = useStyles();
  const teamData = [
    { id: 1, avatar: nft1, name: "Old Crypto Mage", role: "Administrator" },
    { id: 2, avatar: nft2, name: "George", role: "Administrator" },
    { id: 3, avatar: nft3, name: "Nirrex", role: "Administrator" },
    { id: 3, avatar: nft4, name: "ChongGong", role: "Lead Developer" },
    { id: 3, avatar: nft5, name: "LeeMin", role: "Fullstack Developer" },
  ]
  const imageList = [
    { id: 1, url: imgList1 },
    { id: 2, url: imgList2 },
    { id: 3, url: imgList3 },
    { id: 4, url: imgList4 },
    { id: 5, url: imgList5 },
    { id: 6, url: imgList6 },
    { id: 7, url: imgList1 },
    { id: 8, url: imgList2 },
    { id: 9, url: imgList3 },
    { id: 10, url: imgList4 },
    { id: 11, url: imgList5 },
    { id: 12, url: imgList6 },
  ]

  return (
    <Container className={classes.motherWrap} maxWidth="xl">
      {isLoading && <PageLoader />}

      <BuccaneerHeader
        connect={props.connect}
        isHide={props.isHide}
        setIsHide={(e: any) => props.setIsHide(e)}
        connected={props.connected}
        address={props.address}
        chainId={props.chainId}
        killSession={props.killSession}
      />
      <Grid container>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4} className={classes.EcoTitle}>
          <Title>MUDI TOKEN</Title>
          <SubTitle alignCenter>Experience the next generation of Utility that rewards you for participating in the ecosystem and game.</SubTitle>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>

        <Container maxWidth="lg">
          <Grid container spacing={4} className={classes.sectionTwo}>
            <Grid item xs={12} md={6}>
              <MudiCard>
                <Label title="DARKPAPER" fs="24px" fw={700} />
                <SubTitle>
                  Read about MUDI's roadmap, partnerships and culture here in our darkpaper. At MUDI we are experts in digital content creation and high level design. We work with top level global brands and creators and are helping connect the world to web 3.
                </SubTitle>
              </MudiCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MudiCard>
                <Label title="DARKPAPER" fs="24px" fw={700} />
                <SubTitle>
                  Mudi token is available from PancakeSwap, Apeswap, MUDISwap, and soon more. We recommend you use Trust Wallet or Metamask for the best possible user experience. SMBR is meant to be used ONLY as a utility token on the MUDI game platform and to trade goods inside the marketplace.
                </SubTitle>
              </MudiCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MudiCard>
                <Label title="DARKPAPER" fs="24px" fw={700} />
                <SubTitle>
                  Safety is paramount in the wild west of blockchain and web 3 dapps. MUDI strives for the highest level of safety for our users and have partnered with HashEx, a blockchain audit and cyber security firm to review all smart contracts as well as infrastrucure.
                </SubTitle>
              </MudiCard>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.communityArea}>
            <CommunityCard>
              <Label title="JOIN OUR COMMUNITY" fs="44px" fw={700} />
              <SocialWrapper>
                <img src={mail} alt="mail" onClick={() => window.open('https://google.com')} />
                <img src={twitter} alt="twitter" onClick={() => window.open('https://twitter.com')} />
                <img src={facebook} alt="facebook" onClick={() => window.open('https://facebook.com')} />
              </SocialWrapper>
            </CommunityCard>
          </Grid>
          <Grid container spacing={3} className={classes.sectionThree}>
            <Grid item xs={12} md={5}>
              <TokenomicsImage src={tokenomicsImg} alt="tokenomics" />
            </Grid>
            <Grid item xs={12} md={7}>
              <SectionThreeWrapper>
                <div>
                  <Label title="TECH" fw={700} fs="24px" />
                  <SubTitle>
                    Mudi utilizes the latest visual effects and motion capture technology available. We are always pushing the boundaries.
                  </SubTitle>
                </div>
                <div>
                  <Label title="SAFTEY" fw={700} fs="24px" />
                  <SubTitle>
                    Mudi takes user safety as a top priority and has taken every step psosible to ensure smart contract security and continued upgrades.
                  </SubTitle>
                </div>
                <div>
                  <Label title="INNOVATION" fw={700} fs="24px" />
                  <SubTitle>
                    Mudi and SMBR are leading the way in innovative thinking and creative solutions. We are story tellers, creators, artists and entrepreneurs.
                  </SubTitle>
                </div>
              </SectionThreeWrapper>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Label title="TOKENOMICS" fs="40px" fw={700} alignCenter />
            <SubTitle alignCenter>Mudi is a community driven token based on rewards and utility. SMBR will be used in conjunction with BNB and ETH on our marketplace and metaverse content at $50 million marketcap to buy and sell NFTs, subscribe to new reward tiers and more.</SubTitle>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>

          <Grid container spacing={3} className={classes.itemList}>
            <Grid item xs={12} md={4}>
              <TokenCard>
                <img src={transaction} alt="transaction" />
                <Label title="6% Tax on Every" fs="20px" fw={700} />
                <Label title="Transaction" fs="20px" fw={700} />
              </TokenCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TokenCard>
                <img src={liquidity} alt="liquidity" />
                <Label title="3% Sent to Locked" fs="20px" fw={700} />
                <Label title="Liquidity" fs="20px" fw={700} />
              </TokenCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TokenCard>
                <img src={holders} alt="holders" />
                <Label title="3% Redistributed to all" fs="20px" fw={700} />
                <Label title="MUDI Holders" fs="20px" fw={700} />
              </TokenCard>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Label title="TEAM" fs="40px" mt="50px" mb="30px" fw={700} alignCenter />
            </Grid>
            {
              teamData.map((item) => (
                <Grid item xs={12} sm={4} md={3}>
                  <TeamMember>
                    <img src={item.avatar} alt={item.name} />
                    <Label title={item.name} fs="24px" fw={700} alignCenter />
                    <SubTitle alignCenter>{item.role}</SubTitle>
                  </TeamMember>
                </Grid>
              ))
            }

          </Grid>

          <Grid container spacing={3} className={classes.sectionThree}>
            <Grid item xs={12} md={7}>
              <SectionThreeWrapper>
                <Label title="HOW TO GET MUDI" fw={700} fs="40px" />
                <SubTitle>
                  Mudi token is traded on Pancakeswap, Apeswap and MUDISwap. in each case you will need BEP-20 BNB also know as Binance Smart Chain. Once you have aquired BNB on the BEP-20 network you are ready to get SMBR. Go to any of the previous mentioned exchanges and...
                </SubTitle>
                <ul style={{ margin: "1.5em 0" }}>
                  <ListItem>Connect your web 3 wallet to MUDI Swap</ListItem>
                  <ListItem>Set slippage to 7%</ListItem>
                  <ListItem>Enter the amount of BNB you want to swap</ListItem>
                  <ListItem>Confirm Swap</ListItem>
                  <ListItem>Confirm Web 3 transaction</ListItem>
                  <ListItem>Mudi is now in your wallet</ListItem>
                </ul>
                <SubTitle>
                  MUDI Network does not control the price of SMBR and cannot guarantee any financial profits from purchasing SMBR. Please purchase SMBR at your own risk and understrand how to use web 3 applications prior to making any purchases.
                </SubTitle>
              </SectionThreeWrapper>
            </Grid>
            <Grid item xs={12} md={5} className={classes.howtoget}>
              <TokenomicsImage src={tokenomicsImg} alt="tokenomics" />
            </Grid>
          </Grid>


        </Container>
        <MarqueeArea>
          <Track>
            {imageList.map((item) => (
              <ImageWrapper>
                <img src={item.url} alt="imgList" />
              </ImageWrapper>
            ))}
          </Track>
        </MarqueeArea>
        <MarqueeArea>
          <Track1>
            {imageList.map((item) => (
              <ImageWrapper>
                <img src={item.url} alt="imgList" />
              </ImageWrapper>
            ))}
          </Track1>
        </MarqueeArea>

      </Grid>
      <hr />
      <Footer />
    </Container>
  );
};

export default Economics;
