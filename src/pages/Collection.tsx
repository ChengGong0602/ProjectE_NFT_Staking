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
  nftSection: {
    display: "flex",
    justifyContent: "center",
    marginTop: '5em',
    marginBottom: '5em'
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
export const Title = styled.p`
  font-size: 44px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin: 0;
  @media (max-width: 960px) {
    font-size: 30px;
  }
`
export const BannerContainer = styled(Common)`
  position: relative;
  margin: 1em 0;
  div {
    position: absolute;
  }
`
export const BannerImage = styled.img`
  width: 100%;
  max-width: 1300px;
  border-radius: 8px;
  margin: 0 auto;
  min-height: 200px;
`
const CollectionCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 303px;
  min-width: 280px;
  min-height: 362px;
  border-radius: 8px;
  background: #25282C;
  margin: 1em auto;
  box-shadow: 0px 0px 15px #111;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.01);
  }
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
    left: 43%;
  }
`

const Collection = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const classes = useStyles();
  const history = useHistory()

  const collectionData = [
    { id: 1, url: nft1, name: "MUDI", role: "Creater", avatarUrl: avatar },
    { id: 2, url: nft2, name: "MUDI2", role: "Creater", avatarUrl: avatar },
  ]
  const goToConcept = (item: { id: number; url: string; name: string; role: string; avatarUrl: string; }) => {
    console.log(item)
    history.push("/concept")
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
              <Title>MUDI COLLECTION</Title>
            </div>
          </BannerContainer>
          <Grid container spacing={3} className={classes.nftSection}>
            {
              collectionData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <CollectionCard onClick={() => goToConcept(item)}>
                    <img src={item.url} />
                    <img src={item.avatarUrl} />
                    <Label title={item.name} fs="20px" fw={700} mt="25px" alignCenter/>
                    <Label title={item.role} fs="14px" fw={400} mt="5px" alignCenter/>
                  </CollectionCard>
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

export default Collection;
