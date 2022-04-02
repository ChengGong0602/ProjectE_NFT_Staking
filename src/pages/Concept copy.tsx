import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes } from "styled-components";
import Grid from "@material-ui/core/Grid";

import BuccaneerHeader from "../components/Home/BuccaneerHeader";
import PageLoader from "../components/Home/PageLoader";
import Label from "../components/Label"
import Footer from "../components/Footer"
import { FilterDiv, CategoryItem, NftCard, InfoWrapper, Row, SpaceBetween, TimeLeft, PlaceBid } from "./Home"

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
import userAvatar from '../assets/images/bigAvatar.png'
import bnb from '../assets/images/bnb.png'

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
const Title = styled.p`
  font-size: 44px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 0;
  @media (max-width: 960px) {
    font-size: 30px;
  }
`
const BannerContainer = styled(Common)`
  position: relative;
  margin: 1em 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    max-width: 1300px;
    height: 100%;
  }
`
const BannerImage = styled.img`
  width: 100%;
  // max-width: 1300px;
  border-radius: 8px;
  margin: 0 auto;
  min-height: 200px;
`
const InfoCard = styled.div`
  border-radius: 8px;
  background: #25282C;
  box-shadow: 0px 0px 5px #0007;
  border: 1px solid #2C2F32;
  cursor: pointer;
  width: 100%;
  padding: 1em 2em;
`
const SmallCard = styled(InfoCard)`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    padding: 6px 1em;
    border-left: 1px solid #4f4f4f; 
  }
`
const AvatarImage = styled.img`
  width: 152px;
  height: 152px;
  position: absolute;
  bottom: -15%;
  border: 3px solid #25282C;
  border-radius: 76px;
  @media (max-width: 1024px) {
    bottom: -25%;
    width: 132px;
    height: 132px;
  }
`
const SubTitle = styled.p<{ alignCenter?: boolean }>`
  font-size: 16px;
  color: #FFFA;
  text-align: ${props => props.alignCenter ? 'center' : 'left'};
  font-family: "Poppins-Regular";
  @media (max-width: 960px) {
    font-size: 14px;
  }
`


const Concept = (props: Props) => {
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
          <BannerContainer>
            <BannerImage src={collectionBbanner} alt="collectionBbanner" />
            <div>
              <Title>MUDI MARKETPLACE</Title>
              <AvatarImage src={userAvatar} alt="userAvatar" />
            </div>
          </BannerContainer>
          <Grid item xs={12}>
            <Label title="MUDI" fw={700} fs="20px" mt="60px" alignCenter />
            <Label title="Creator" fs="14px" mb="40px" alignCenter />
          </Grid>
          <Grid container spacing={3} className={classes.infoSection}>
            <Grid item xs={12} md={6}>
              <InfoCard>
                <Label title="ABOUT THE COLLECTION" fs="24px" fw={700} />
                <SubTitle>
                  Mudi Concept Collection is the 1st MUDI Collection to be listed on our platform and is a concept illustration to be turned into 3D counterparts in the near future. These are inspired by the era of
                </SubTitle>
              </InfoCard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.itemGroup}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <SmallCard>
                    <Label title="ITEMS" fs="16px" fw={700} />
                    <div>
                      <Label title="1" fs="16px" fw={700} />
                    </div>
                  </SmallCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SmallCard>
                    <Label title="FLOOR PRICE" fs="16px" fw={700} />
                    <div>
                      <Label title="2.5 BNB" fs="16px" fw={700} />
                    </div>
                  </SmallCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SmallCard>
                    <Label title="OWNERS" fs="16px" fw={700} />
                    <div>
                      <Label title="1" fs="16px" fw={700} />
                    </div>
                  </SmallCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SmallCard>
                    <Label title="TOTAL SALES" fs="16px" fw={700} />
                    <div>
                      <Label title="5 BNB" fs="16px" fw={700} />
                    </div>
                  </SmallCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.filterSection}>
            <FilterDiv>
              {Category.map((item, index) => (
                <CategoryItem onClick={() => setActiveCategory(index)} style={{
                  border: `1px solid ${activeCategory === index ? '#B91C1C' : 'transparent'}`
                }}>
                  <p style={{ color: activeCategory === index ? '#B91C1C' : 'white' }}>{item}</p>
                </CategoryItem>
              ))}
            </FilterDiv>
          </Grid>

          <Grid container spacing={3} className={classes.nftSection}>
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
                      {
                        index < 3 ?
                          <SpaceBetween>
                            <TimeLeft>
                              <Label title={`${item.timeLeft} left`} />
                            </TimeLeft>
                            <PlaceBid>
                              <Label title="Place a bid" />
                            </PlaceBid>
                          </SpaceBetween>
                          :
                          <SpaceBetween alignCenter>
                            <PlaceBid>
                              <Label title="Sold" />
                            </PlaceBid>
                          </SpaceBetween>
                      }
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

export default Concept;
