import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import PageLoader from "../components/Home/PageLoader";
import Label from "../components/Label"
import Footer from "../components/Footer"
import { Title } from './Collection'
import { SectionThreeWrapper, TokenomicsImage, TeamMember, SubTitle, ListItem } from './Economics'
import nft1 from '../assets/images/nft1.png'
import nft2 from '../assets/images/nft2.png'
import nft3 from '../assets/images/nft3.png'
import nft4 from '../assets/images/nft4.png'
import nft5 from '../assets/images/nft5.png'
import nft6 from '../assets/images/nft6.png'
import nft7 from '../assets/images/nft7.png'
import nft8 from '../assets/images/nft8.png'

import tokenomicsImg from '../assets/images/nft2.png'
import collectionBbanner from '../assets/images/collectionBbanner.png'

import "./particle.css";

const useStyles = makeStyles((theme) => ({
  motherWrap: {
    position: "relative",
    width: "100%",
    left: 0,
    right: 0,
    backgroundSize: "cover",
    padding: 0,
    minHeight: "100vh"
  },
  infoSection: {
    display: "flex",
    justifyContent: "center",
  },
  itemGroup: {
    height: 190,
    display: "flex",
  },
  filterSection: {
    margin: "50px 0"
  },
  nftSection: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50
  },
  sectionThree: {
    marginTop: "100px",
    marginBottom: "100px",
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
const InfoCard = styled.div`
  border-radius: 8px;
  background: #25282C;
  box-shadow: 0px 0px 5px #0007;
  border: 1px solid #2C2F32;
  width: 100%;
  max-height: 482px;
  height: 100%;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`
const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;
  img {
    width: 24px;
  }
`
const NftUserAvatar = styled.img`
  width: 82px;
  height: 82px;
  margin-right: 30px;
  border-radius: 41px;
`
const DetailImage = styled.img`
  box-shadow: 0px 0px 5px #0007;
  border: 30px solid #25282C;
  border-radius: 8px;
  width: 100%;
  max-width: 524px;
  max-height: 482px;
`
const AboutContainer = styled.div`
  background: url(${collectionBbanner});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    height: 200px;
  }
  img {
    min-height: 200px;
  }
`
const RoadmapContainer = styled.div`
  width: 100%;
  max-width: 916px;
  border-radius: 8px;
  border: 1px solid #25282C;
  background: #25282C;
  padding: 2em 1em;
  margin: 5em auto;
  @media (max-width: 768px) {
    padding: 1em 0;

  }
`
const CustomTimeline = styled(Timeline)`
  align-items: flex-start;
  // border: 1px solid blue;
  padding: 0 !important;
`
const CustomDot = styled(TimelineDot)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white !important;
  color: #4C4B63 !important;
  font-weight: bold;
  font-size: 24px;
`
const CustomTimelineConnector = styled(TimelineConnector)`
  width: 15px !important;
  min-height: 100px;
  border-radius: 7.5px;
  margin-left: 0 !important;
`
const UlWrapper = styled.ul`
  margin-top: 1.5em;
  width: 600px;
  @media (max-width: 960px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 540px) {
    width: 220px;
  }
`
const CustomTimelineContent = styled(TimelineContent)`
  margin: 0 0 1em 1em;
  // border: 1px solid red;
  padding-left: 5px !important;
  @media (max-width: 768px) {
    margin: 0 0 1em 0em;
  }
`


const About = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const classes = useStyles();
  const history = useHistory()
  const teamData = [
    { id: 1, avatar: nft1, name: "Old Crypto Mage", role: "Administrator" },
    { id: 2, avatar: nft2, name: "George", role: "Administrator" },
    { id: 3, avatar: nft3, name: "Nirrex", role: "Administrator" },
    { id: 3, avatar: nft4, name: "ChongGong", role: "Lead Developer" },
    { id: 3, avatar: nft5, name: "LeeMin", role: "Fullstack Developer" },
  ]
  const goToDetail = (e: { id: number; url: string; title: string; price: number; timeLeft: string; avatarUrl: string; }) => {
    history.push("/detail")
  }

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
      <AboutContainer style={{ margin: 0 }}>
        <Title>MUDI COLLECTION</Title>
      </AboutContainer>
      <Grid container>
        <Container maxWidth="lg">

          <Grid container spacing={3} className={classes.sectionThree}>
            <Grid item xs={12} md={7}>
              <SectionThreeWrapper>
                <Label title="HOW TO GET MUDI" fw={700} fs="40px" />
                <SubTitle>
                  We are a bespoke NFT / VFX / Design DAO and a group of experts in digital creation. We create the content and craft the stories that ignite the imagination of a decentralized future.
                </SubTitle>
                <SubTitle>
                  Our Mission: connect major brands to the world of NFTs and cryptocurrency as well as help artists start and progress on their journey to blockchain enlightenment. MUDI was founded by VFX and Tech experts with deep rooted connections to global brands, advertising agencies, hollywood films, TV shows, and emerging technology. We are artists, leaders, entrepreneurs and so much more. Through our large staff and partner studios, as well as years of experience creating top level content for films, tv and games we are here to bring the best level of content to blockchain and the metaverse. We are storytellers and tech innovators, constantly pushing the boundaries of what is possible. MUDI is the future.
                </SubTitle>
              </SectionThreeWrapper>
            </Grid>
            <Grid item xs={12} md={5} className={classes.howtoget}>
              <TokenomicsImage src={tokenomicsImg} alt="tokenomics" />
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

          <RoadmapContainer>
            <Label title="ROADMAP" fs="40px" fw={700} mb="40px" alignCenter />
            <CustomTimeline>
              <TimelineItem>
                <TimelineSeparator>
                  <CustomDot>1</CustomDot>
                  <CustomTimelineConnector />
                </TimelineSeparator>
                <CustomTimelineContent>
                  <InfoCard>
                    <Label title="STAGE 1" fs="24px" fw={700} />
                    <UlWrapper>
                      <ListItem>Connect your web 3 wallet to MUDI Swap</ListItem>
                      <ListItem>Set slippage to 7%</ListItem>
                      <ListItem>Enter the amount of BNB you want to swap</ListItem>
                      <ListItem>Confirm Swap</ListItem>
                      <ListItem>Confirm Web 3 transaction</ListItem>
                      <ListItem>Mudi is now in your wallet</ListItem>
                    </UlWrapper>
                  </InfoCard>
                </CustomTimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <CustomDot>2</CustomDot>
                  <CustomTimelineConnector />
                </TimelineSeparator>
                <CustomTimelineContent>
                  <InfoCard>
                    <Label title="STAGE 2" fs="24px" fw={700} />
                    <UlWrapper>
                      <ListItem>Connect your web 3 wallet to MUDI Swap</ListItem>
                      <ListItem>Set slippage to 7%</ListItem>
                      <ListItem>Enter the amount of BNB you want to swap</ListItem>
                      <ListItem>Confirm Swap</ListItem>
                      <ListItem>Confirm Web 3 transaction</ListItem>
                      <ListItem>Mudi is now in your wallet</ListItem>
                    </UlWrapper>
                  </InfoCard>
                </CustomTimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <CustomDot>3</CustomDot>
                  <CustomTimelineConnector />
                </TimelineSeparator>
                <CustomTimelineContent>
                  <InfoCard>
                    <Label title="STAGE 3" fs="24px" fw={700} />
                    <UlWrapper>
                      <ListItem>Connect your web 3 wallet to MUDI Swap</ListItem>
                      <ListItem>Set slippage to 7%</ListItem>
                      <ListItem>Enter the amount of BNB you want to swap</ListItem>
                      <ListItem>Confirm Swap</ListItem>
                      <ListItem>Confirm Web 3 transaction</ListItem>
                      <ListItem>Mudi is now in your wallet</ListItem>
                    </UlWrapper>
                  </InfoCard>
                </CustomTimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <CustomDot>4</CustomDot>
                </TimelineSeparator>
                <CustomTimelineContent>
                  <InfoCard>
                    <Label title="STAGE 4" fs="24px" fw={700} />
                    <UlWrapper>
                      <ListItem>Connect your web 3 wallet to MUDI Swap</ListItem>
                      <ListItem>Set slippage to 7%</ListItem>
                      <ListItem>Enter the amount of BNB you want to swap</ListItem>
                      <ListItem>Confirm Swap</ListItem>
                      <ListItem>Confirm Web 3 transaction</ListItem>
                      <ListItem>Mudi is now in your wallet</ListItem>
                    </UlWrapper>
                  </InfoCard>
                </CustomTimelineContent>
              </TimelineItem>
            </CustomTimeline>
          </RoadmapContainer>

          {/* <LoginButton w="250px" mt="60px" onClick={() => alert('Load More')} style={{ margin: '60px auto' }}>Load More</LoginButton> */}
        </Container>

      </Grid>
      <hr />
      <Footer />
    </Container>
  );
};

export default About;
