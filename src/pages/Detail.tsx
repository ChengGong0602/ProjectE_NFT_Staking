import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";

import BuccaneerHeader, { LoginButton } from "../components/Home/BuccaneerHeader";
import PageLoader from "../components/Home/PageLoader";
import Label from "../components/Label"
import Footer from "../components/Footer"
import { SubTitle, NftCard, InfoWrapper, Row, SpaceBetween, TimeLeft, PlaceBid } from "./Home"

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
import avatar from '../assets/images/avatar.png'

import collectionBbanner from '../assets/images/collectionBbanner.png'
import nftUser from '../assets/images/bigAvatar.png'
import bnb from '../assets/images/bnb.png'
import back from '../assets/images/back.png'

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


const Detail = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const classes = useStyles();
  const history = useHistory()

  const Category = ["ALL", "BIOS", "Reserve Price", "Fixed Price"]
  const collectionData = [
    { id: 1, url: nft1, name: "MUDI", role: "Creater", avatarUrl: avatar },
    { id: 2, url: nft2, name: "MUDI2", role: "Creater", avatarUrl: avatar },
  ]
  const goToConcept = (item: { id: number; url: string; name: string; role: string; avatarUrl: string; }) => {
    console.log(item)
    history.push("/concept")
  }
  const NFTData = [
    { id: 1, url: nft1, title: "A King's Burden", price: 2, timeLeft: "01d:00h:23m", avatarUrl: avatar },
    { id: 2, url: nft2, title: "A King's Burden", price: 3, timeLeft: "01d:00h:23m", avatarUrl: avatar },
    { id: 3, url: nft3, title: "A King's Burden", price: 4, timeLeft: "01d:00h:23m", avatarUrl: avatar },
    { id: 4, url: nft4, title: "A King's Burden", price: 4, timeLeft: "01d:00h:23m", avatarUrl: avatar },
    { id: 5, url: nft5, title: "A King's Burden", price: 5, timeLeft: "01d:00h:23m", avatarUrl: avatar },
    { id: 6, url: nft6, title: "A King's Burden", price: 6, timeLeft: "01d:00h:23m", avatarUrl: avatar },
    { id: 7, url: nft7, title: "A King's Burden", price: 7, timeLeft: "01d:00h:23m", avatarUrl: avatar },
    { id: 8, url: nft8, title: "A King's Burden", price: 8, timeLeft: "01d:00h:23m", avatarUrl: avatar },
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
      <Grid container>

        <Container maxWidth="lg">
          <Grid item xs={12}>
            <BackButton>
              <img src={back} alt="back image" />
              <Label title="Back" fs="16px" />
            </BackButton>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <DetailImage src={nft1} alt="nft-detail" />
              {/* <DetailedNFT>
              </DetailedNFT> */}
            </Grid>
            <Grid item xs={12} md={7}>
              <InfoCard>
                <SpaceBetween>
                  <Row>
                    <NftUserAvatar src={nftUser} alt="nft-user-avatar" />
                    <div>
                      <Label title="MUDI" fs="20px" fw={700} />
                      <Label title="Creator" fs="16px" />
                    </div>
                  </Row>
                  <Row alignCenter>
                    <img src={bnb} style={{ width: '35px', height: '35px' }} />
                    <Label title="2BNB" color="#E1BF47" ml="10px" fw={700} fs="18px" />
                  </Row>
                </SpaceBetween>
                <Label title="Betta Dog" fs="24px" fw={700} />
                <SubTitle>
                  1024 x 1024 - Betta Fish is a fun play on oil and water refraction. A fish on a mission. A MUDI original by Pierce Caldwell.
                </SubTitle>
                <Row style={{ marginTop: 30 }}>
                  <div style={{ width: '100%' }}>
                    <Label title="Starting Price:" fs="16px" fw={700} />
                    <Row>
                      <img src={bnb} style={{ width: '35px', height: '35px' }} />
                      <Label title="2BNB" color="#E1BF47" mt="10px" mb="10px" ml="10px" fw={700} fs="18px" />
                    </Row>
                  </div>
                  <div style={{ width: '100%' }}>
                    <Label title="Starting Price:" fs="16px" fw={700} />
                    <Label title="01d : 00h : 23m" color="#E1BF47" mt="10px" mb="10px" ml="10px" fw={700} fs="18px" />
                  </div>
                </Row>
                <LoginButton w="100%">Place a bid</LoginButton>
              </InfoCard>
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.nftSection}>
            <Grid item xs={12}>
              <Label title="MORE FROM CREATOR" fs="32px" fw={700} />
            </Grid>
            {
              NFTData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <NftCard onClick={() => goToDetail(item)}>
                    <img src={item.url} />
                    <img src={item.avatarUrl} />
                    <InfoWrapper>
                      <Label title={item.title} fs="20px" fw={700} mt="10px" mb="10px" />
                      <Row alignCenter>
                        <img src={bnb} style={{ width: '20px', height: '20px' }} />
                        <Label title={`${item.price.toFixed(2)}BNB`} color="#E1BF47" ml="10px" fs="14px" />
                      </Row>
                      <SpaceBetween>
                        <TimeLeft>
                          <Label title={`${item.timeLeft} left`} />
                        </TimeLeft>
                        <PlaceBid>
                          <Label title="Place a bid" />
                        </PlaceBid>
                      </SpaceBetween>

                    </InfoWrapper>
                  </NftCard>
                </Grid>
              ))
            }


          </Grid>

          {/* <LoginButton w="250px" mt="60px" onClick={() => alert('Load More')} style={{ margin: '60px auto' }}>Load More</LoginButton> */}
        </Container>

      </Grid>
      <hr />
      <Footer />
    </Container>
  );
};

export default Detail;
