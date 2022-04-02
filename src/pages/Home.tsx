import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "../styles";

import BuccaneerHeader, { LoginButton } from "../components/Home/BuccaneerHeader";
import PageLoader from "../components/Home/PageLoader";
import Label from "../components/Label"
import Footer from "../components/Footer"
import sectionOneImg from "../assets/images/sectionOneImg.png";
import CloseIcon from "../assets/pepper/close-button.png"
import sectionTwoRightImg from "../assets/images/sectionTwoRightImg.png";
import sectionThreeRightImg from "../assets/images/5.jpg";
import mintSiteImg from "../assets/images/137.png";
import nft1 from '../assets/images/1.png'
import nft2 from '../assets/images/22.jpg'
import nft3 from '../assets/images/33.jpg'
import nft4 from '../assets/images/4.png'
import nft5 from '../assets/images/5.jpg'
import nft6 from '../assets/images/6.jpg'
import nft7 from '../assets/images/7.png'
import nft8 from '../assets/images/8.jpg'
import nft129 from '../assets/images/129.png'
import nft130 from '../assets/images/130.png'
import nft131 from '../assets/images/131.png'
import nft132 from '../assets/images/132.png'
import nft133 from '../assets/images/133.png'
import nft134 from '../assets/images/134.png'
import nft135 from '../assets/images/135.png'
import nft136 from '../assets/images/136.png'
import { Icon } from '@iconify/react';
import "./particle.css";

const useStyles = makeStyles((theme) => ({
  particlesContainer: {
    width: "100%",
    height: "90vh",
    position: "absolute",
    left: 0,
    top: 0,
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },
  motherWrap: {
    position: "relative",
    width: "100%",
    left: 0,
    right: 0,
    backgroundSize: "cover",
    padding: 0,
  },
  nftSection: {
    display: "flex",
    justifyContent: "center",
  },
  sectionOne: {
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    marginTop: -100
  },
  textWrap: {
    width: "100%",
    position: "absolute",
    top: 150,
    padding: "0 5%",
    textAlign: "center",
  },
  textItem1: {
    fontSize: 50,
    zIndex: 999,
    textTransform: 'uppercase',
  },
  textItem2: {
    fontSize: "44px",
    fontWeight: 700,
  },
  sectionTwo: {
    width: "100%",
    minHeight: "80vh",
    alignItems: "center",
    display: "flex",
    marginTop: 100,
    zIndex: 3,
  },
  subWrapText: {
    margin: "auto",
    padding: "2% !important",
  },
  subWrapImg: {
    margin: "auto",
    padding: "2% !important",
    textAlign: "center",
  },
  imgs: {
    width: "90%",
    maxWidth: 447
  },
  whyWheText: {
    color: "white",
    fontSize: 60,
    marginBottom: 50,
    textTransform: "uppercase",
  },
  whyWheSubText: {
    color: "white",
    fontSize: 18,
  },
  whyWheQueText: {
    color: "#D81DFA",
    fontSize: "24px",
    fontWeight: 700,
  },
  sectionThree: {
    width: "100%",
    // minHeight: "60vh",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: "5% 0",
  },
  title3Wrap: {
    width: "100%",
    padding: "0 5% 0 5% !important",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginTop: "2em",
  },
  sliderWrap: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  gangWrap: {
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  roadmapWrap: {
    width: "100%",
    paddingLeft: 0,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginTop: "2em",
  },
  textTokenomics: {
    fontSize: "46px",
  },
  subWrapImgPie: {
    margin: "auto",
    padding: "2% !important",
    textAlign: "center",
  },
  rewardBox: {
    width: "100%",
  },
  rewardSubWrap: {
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#d065d6",
    borderRadius: "10px",
    borderWidth: "2.5px",
    backgroundColor: "#f0f8ff1a",
    padding: "4%",
    minHeight: "370px",
  },
  rewardSubTitle: {
    color: "white",
    fontSize: "22px",
    fontWeight: 700,
  },
  rewardSubUnderline: {
    width: "50%",
    height: "3px",
    backgroundColor: "#23ffff",
    marginLeft: "25%",
  },
  rewardContents: {
    width: "100%",
    textAlign: "left",
    marginTop: "2em",
  },
  rewardContentItem: {
    display: "flex",
    marginTop: "10px",
  },
  rewardText: {
    marginLeft: "5px",
    marginTop: "-3px",
    color: "white",
  },
  pointerImg: {
    maxHeight: "18px",
  },
  stepContents: {
    textAlign: "center",
    color: "white",
    lineHeight: "1.25em",
  },
  stepWrap: {
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "#d065d6",
    borderRadius: "10px",
    borderWidth: "2.5px",
    backgroundColor: "#f0f8ff1a",
    padding: "6% 2%",
    minHeight: "190px",
    width: "100%",
  },
  stepLinked: {
    color: "#d81dfa",
    textDecoration: "underline",
  },
  addressText: {
    color: "white",
    fontSize: "24px",
  },
  tokenText: {
    color: "white",
    fontSize: "18px",
    marginRight: "0.5em",
  },
  tokenWrap: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  copyImg: {
    maxHeight: "25px",
    maxWidth: "25px",
    marginTop: "auto",
    marginBottom: "auto",
    cursor: "pointer",
    "&:active": {
      opacity: 0.7,
    },
  },
  buyButton: {
    backgroundColor: "#d81dfa",
    color: "white",
    padding: "20px 30px",
    borderRadius: "10px",
    fontSize: "18px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  buttonWrap: {
    textAlign: "center",
    width: "100%",
  },
  contact: {
    marginTop: "10px",
    color: "white",
    fontSize: "16px",
  },
  footerWrap: {
    width: " 100%",
    textAlign: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: "0",
    borderTopWidth: "1px",
    borderColor: "#bc4bff",
    padding: "1.5em 0",
  },
  [theme.breakpoints.down("xs")]: {},
  [theme.breakpoints.down("sm")]: {
    textItem1: {
      fontSize: "26px",
    },
    textItem2: {
      fontSize: "28px",
      fontWeight: 700,
    },
    subWrapText: {
      padding: "10% !important",
    },
    subWrapImgPie: {
      marginTop: "-2em",
    },
    tokenText: {
      fontSize: "10px",
    },
    whyWheText: {
      fontSize: "40px",
    },
    textTokenomics: {
      fontSize: "40px",
    },
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

const SectOneBg = styled.img`
  width: 100%;
  min-height: 900px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 960px) {
    background-size: cover;
  }
`
const WhiteListButton = styled.div`
  width: 285px;
  height: 55px;
  border-radius: 10px;
  background: -webkit-linear-gradient(${colors.secondary}, ${colors.main});
  color: white;
  font-size: 22px;
  font-family: "Poppins-Medium", "sans-serif";
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em auto;
  cursor: pointer;
  &:hover {
    background: -webkit-linear-gradient(${colors.main}, ${colors.secondary});
  }
  &:active {
    transform: translateY(1px);
  }
`
const TokenomicsText = styled.span`
  font-size: 22px;
  font-family: "Poppins-SemiBold", sans-serif;
  color: white;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`
const GifContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`
const DialogWrapper = styled.div<{ open: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
  background: #0003;
  z-index: 997;
  display: ${props => props.open ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`
const DialogBox = styled.div`
  background: #0009;
  backdrop-filter: blur(4px);
  border-radius: 8px;
  width: 94%;
  max-height: 90vh;
  overflow: auto;
  max-width: 600px;
  padding: 1em;
  min-width: 340px;
  border: 1px solid white;
  p {
    font-family: "Poppins-Medium";
    color: white;
  }
`
const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
  P {
    font-size: 36px;
    font-weight: 700;
  }
`
const DialogContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`
const DialogCloseWrap = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  img {
    &:active {
      transform: translateY(1px);
    }
  }
  &:hover {
    transform: scale(1.05);
  }
`
const CustomInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 0 1em;
  margin: 3px 0 8px 0;
  border: none;
  outline: none;
  font-family: "Poppins-Medium";
  &:hover {
    border: 1px solid ${colors.main};
  }
`
const SuccessMsg = styled.p`
  color: white;
  font-size: 28px;
  text-align: center;
`
const Common = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Row = styled(Common) <{ alignCenter?: boolean }>`
  flex-direction: row;
  justify-content: ${props => props.alignCenter ? 'center' : 'flex-start'};
  margin: 10px 0;
`
export const SpaceBetween = styled(Common) <{ alignCenter?: boolean }>`
  justify-content: ${props => props.alignCenter ? 'center' : 'space-between'};
`
const SmallTitle = styled.span`
  color: #991B1B;
  font-size: 14px;
`
const Title = styled.p`
  font-size: 56px;
  color: white;
  font-weight: bold;
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
const SectionImage = styled.img`
  @media (max-width: 599px) {
    max-width: 300px !important;
    background-size: contain;
  }
`
export const FilterDiv = styled.div`
  width: 100%;
  // height: 92px;
  background: #26292D;
  padding: 1em 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`
export const CategoryItem = styled(Common)`
  width: 120px;
  height: 52px;
  border-radius: 26px;
  margin: 0 1em;
  &:hover {
    cursor: pointer;
    text-shadow: 1px 1px 9px white, 0 0 2em white, 0 0 1em darkblue;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`
export const NftCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 303px;
  min-width: 280px;
  min-height: 430px;
  border-radius: 8px;
  background: #25282C;
  margin: 1em auto;
  box-shadow: 0px 0px 15px #111;
  img:nth-child(1) {
    width: 100%;
    height: 268px;
  }
  img:nth-child(2) {
    width: 47px;
    height: 47px;
    border-radius: 23.5px;
    position: absolute;
    top: 247px;
    left: 20px;
  }
`
export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`
export const TimeLeft = styled(Common)`
  width: 143px;
  height: 36px;
  background: #36383C;
  border: 1px solid #86888B;
  border-radius: 18px;
`
export const PlaceBid = styled(Common)`
  background: #B91C1C;
  height: 36px;
  border-radius: 18px;
  padding: 0 15px;
  min-width: 110px;
  cursor: pointer;
  &:hover {
    text-shadow: 1px 1px 9px white, 0 0 2em white, 0 0 1em darkblue;
  }
  &:active {
    transform: translateY(1px);
  }
`
const MudiCard = styled.div<{ alignCenter?: boolean }>`
  width: 100%;
  // min-height: 230px;
  padding: 40px;
  box-shadow: 0px 0px 15px #0007;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignCenter ? 'center' : 'left'};
`
const CommunityCard = styled(MudiCard)`
  border: 1px solid #2C2F32;
  background: #25282C;
  align-items: center;
  box-shadow: none;
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
interface Props {
  connect: () => void;
  setIsHide: (e: any) => void;
  killSession: () => void;
  isHide: boolean;
  connected: boolean;
  address: string;
  chainId: number;
}


const Home = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false)
  const [twitterHandle, setTwitterHandle] = useState("")
  const [telegramHandle, setTelegramHandle] = useState("")
  const [discordHandle, setDiscordHandle] = useState("")
  const [bscAddress, setBscAddress] = useState("")

  const NFTData = [
    { id: 1, url: nft1, title: "Mutant Floki by Will Jack", description: "Welcome to Mutant Floki, featuring DC Comics artist Will Jack" },
    { id: 2, url: nft2, title: "Not Your Bro", description: "It's a movement. 100% Female-Led." },
    { id: 3, url: nft3, title: "Mintonian Society", description: "The Mintyverse is expanding! Enter the Mintonians. The Mintonians are a brand new collection of 10,0..." },
    { id: 4, url: nft4, title: "Pop Wonder Editions", description: "Special release multi-edition NFTs by Pop Wonder" },
    { id: 5, url: nft5, title: "Jungle Of Dreams", description: "A connection between nature and our dreams in the modern world. " },
    { id: 6, url: nft6, title: "Mendel Genesis Odyssey", description: "BEYOND THE SUN, BEYOND THE ETHERS, BEYOND THE CONFINES OF THE STARRY SPHERES." },
    { id: 7, url: nft7, title: "Meta Bounty Hunters", description: "Meta Bounty Hunters is a digital collection of 8,888 unique NFTs. Meta Bounty Hunters is a first of ..." },
    { id: 8, url: nft8, title: "Lucky Zeros | Purebase", description: "Join the brave and embark on untold adventures across the metaverse with " },
  ]

  const classes = useStyles();
  const closeDialog = () => setOpenDialog(false)
  const submitInfo = async () => {
    if (twitterHandle == "" || telegramHandle == "" || discordHandle == "" || bscAddress == "") {
      alert("Please fill all fields.")
    } else {
      try {
        setIsLoading(true)
        const response = await fetch(`${process.env.REACT_APP_MY_API}?tabId=Sheet1`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify([[twitterHandle, telegramHandle, discordHandle, bscAddress, new Date().toLocaleString(), new Date().toISOString()]])
        })
        await response.json()
        setIsLoading(false)
        setTwitterHandle("")
        setTelegramHandle("")
        setDiscordHandle("")
        setBscAddress("")
        setOpenDialog(false)
        setOpenSuccessDialog(true)
      } catch (error) {
        console.log('submit error=>', error)
      }
    }

  }
  const teamData = [
    { id: 1, avatar: nft129, name: "Bot-Free", role: "100% bot-free. Our custom contract is changed regularly so the bots never learn." },
    { id: 2, avatar: nft130, name: "Image Generation", role: "Bring your own assets, or use our collection builder to preview your work instantly." },
    { id: 3, avatar: nft131, name: "Custom Contracts", role: "By using custom contracts, we tailor your mint to meet the needs of your roadmap or utility." },
    { id: 3, avatar: nft132, name: "Whitelist", role: "We support the use of SPL Tokens or custom on-chain whitelist." },
    { id: 3, avatar: nft133, name: "Cooldown", role: "Custom cooldown feature to maximize number of unique holders during mint." },
    { id: 3, avatar: nft134, name: "Mint Page", role: "Create your mint page however it suites your project's brand identity." },
    { id: 3, avatar: nft135, name: "Short-Notice", role: "We're always around! We can deploy a mint in less than 4 hours if need be." },
    { id: 3, avatar: nft136, name: "Support 24/7", role: "We are always online on Discord and are always live with you during minting." },
  ]

  return (
    <Container className={classes.motherWrap} maxWidth="xl">
      {isLoading && <PageLoader />}
      <DialogWrapper open={openDialog}>
        <DialogBox>
          <DialogHeader>
            <p>Join Whitelist</p>
            <DialogCloseWrap onClick={closeDialog}>
              <img src={CloseIcon} alt="close-icon" />
            </DialogCloseWrap>
          </DialogHeader>
          <DialogContent>
            <p>Twitter</p>
            <CustomInput value={twitterHandle} onChange={(e) => setTwitterHandle(e.target.value)} />
            <p>Telegram</p>
            <CustomInput value={telegramHandle} onChange={(e) => setTelegramHandle(e.target.value)} />
            <p>Discord</p>
            <CustomInput value={discordHandle} onChange={(e) => setDiscordHandle(e.target.value)} />
            <p>BSC address</p>
            <CustomInput value={bscAddress} onChange={(e) => setBscAddress(e.target.value)} />
            <WhiteListButton onClick={submitInfo}>Submit</WhiteListButton>
          </DialogContent>
        </DialogBox>
      </DialogWrapper>

      <DialogWrapper open={openSuccessDialog}>
        <DialogBox>
          <DialogContent>
            <SuccessMsg>You were successfully added to whitelist</SuccessMsg>
            <WhiteListButton onClick={() => setOpenSuccessDialog(false)}>OK</WhiteListButton>
          </DialogContent>
        </DialogBox>
      </DialogWrapper>

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
        <Grid item md={12} className={classes.sectionOne}>
          <GifContainer>
            <SectOneBg src={sectionOneImg} alt="sectionOneImg" />
          </GifContainer>

          <Grid id="whypeno" item md={12} className={classes.sectionTwo}>
            <Container maxWidth="lg">
              <Grid container spacing={3}>

                <Grid item xs={12} sm={6} className={classes.subWrapText}>
                  <SmallTitle>NFT MARKET</SmallTitle>
                  <Title>A Revenue Sharing </Title>
                  <Title>Launchpad</Title>
                  <SubTitle>We launch your NFT from concept to deployment, backed by our community of holders who earn 50% of earnings weekly.</SubTitle>
                  <LoginButton w="195px" mt="40px" onClick={() => alert(23)}>Get started for free</LoginButton>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.subWrapImg}>
                  <SectionImage
                    className={classes.imgs}
                    src={sectionTwoRightImg}
                    alt="sss"
                  />
                </Grid>
                <Grid item xs={12} className={classes.subWrapText}>
                  <Title>Minting Now</Title>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>

        <Grid item md={12} className={classes.sectionTwo}>
          <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.nftSection}>
              {
                NFTData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} className={classes.NftCardStyle}>
                    <NftCard>
                      <img src={item.url} />
                      <InfoWrapper>
                        <Label title={item.title} fs="20px" fw={700} mt="10px" mb="10px" alignCenter />
                        <SubTitle alignCenter>{item.description}</SubTitle>
                      </InfoWrapper>
                    </NftCard>
                  </Grid>
                ))
              }

            </Grid>
          </Container>
        </Grid>

        <Grid item md={12} className={classes.sectionThree}>
          <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.nftSection}>
              <Grid item xs={12} sm={6} className={classes.subWrapText}>
                <Title>Popular Launches</Title>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.subWrapText}>
                <div style={{ textAlign: 'right' }}>
                  <LoginButton w="250px" onClick={() => alert('Load More')}>View All Upcoming</LoginButton>
                </div>
              </Grid>
              <Grid item xs={12} className={classes.communityArea}>
                <CommunityCard>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} className={classes.subWrapText}>
                      <Title>What is a Project E?</Title>
                      <SubTitle>Our Launchpad's revenue is shared amongst ProjectE NFT holders. 50% of all revenue that the company earns from deving projects is split amongst all ProjectE holders automatically.</SubTitle>
                      <LoginButton w="195px" mt="40px" onClick={() => alert(23)}>Find out more</LoginButton>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.subWrapImg}>
                      <SectionImage
                        className={classes.imgs}
                        src={sectionThreeRightImg}
                        alt="sss"
                      />
                    </Grid>
                  </Grid>
                </CommunityCard>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item md={12} className={classes.sectionThree}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Label title="Create your NFT collection" fs="40px" mt="50px" mb="30px" fw={700} alignCenter />
                <SubTitle alignCenter>A few reasons creators chose to deploy with ProjectEs</SubTitle>
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
          </Container>
        </Grid>

        <Grid item md={12} className={classes.sectionThree}>
          <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.nftSection}>
              <Grid item xs={12} sm={6} className={classes.subWrapImg}>
                <SectionImage
                  className={classes.imgs}
                  src={mintSiteImg}
                  alt="sss"
                />
              </Grid>
              <Grid item xs={12} sm={6} className={classes.subWrapText}>
                <Label title="Manage Your Mint" fs="24px" fw={700} />
                <SubTitle><Icon icon="akar-icons:circle-check" color="#0fa958" /> See revenues from mint in real-time.</SubTitle>
                <SubTitle><Icon icon="akar-icons:circle-check" color="#0fa958" /> Manage mint page image and text in real-time.</SubTitle>
                <SubTitle><Icon icon="akar-icons:circle-check" color="#0fa958" /> Download hashlists and necessary secondary data.</SubTitle>
                <SubTitle><Icon icon="akar-icons:circle-check" color="#0fa958" /> Track your progress with interactive charts.</SubTitle>
                <SubTitle><Icon icon="akar-icons:circle-check" color="#0fa958" /> "Powered By ProjectEs" seal of authenticity.</SubTitle>
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item md={12} className={classes.sectionThree}>
          <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.nftSection}>
              <Grid item xs={12}>
                <Label title="Platform Fees" fs="40px" mt="50px" mb="30px" fw={700} alignCenter />
                <SubTitle alignCenter>Non NFT Holder | NFT Holder</SubTitle>
              </Grid>
            <Grid item xs={12} md={6}>
              <MudiCard>
                <SubTitle alignCenter>Primary Sales</SubTitle>
                <Label title="22%" fs="24px" fw={700} alignCenter />
              </MudiCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <MudiCard>
                <SubTitle alignCenter>Secondary Sales</SubTitle>
                <Label title="10%" fs="24px" fw={700} alignCenter />
              </MudiCard>
            </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <hr />
      <Footer />
    </Container>
  );
};

export default Home;
