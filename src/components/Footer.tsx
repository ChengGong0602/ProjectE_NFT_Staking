import React from 'react'
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components"

import logo from '../assets/logo.png'
import mail from '../assets/images/mail.png'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import Label from './Label';
import { LoginButton } from './Home/BuccaneerHeader';

const useStyles = makeStyles((theme) => ({
  motherWrap: {
    padding: '3em 3em 1em',
  },
  linksWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}))

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
const EmailInput = styled.input`
  width: 100%;
  border: 1px solid #fffa;
  border-radius:3px;
  height: 40px;
  padding: 0 15px;
  color: #fffa;
  background: transparent;
  margin: 20px 0;
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
const CopyRight = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

const Footer = () => {
  const classes = useStyles();
  const socialLinks = [
    { id: 1, title: "Telegram", linkTo: "https://google.com" },
    { id: 2, title: "Bscscan", linkTo: "https://bscscan.com" },
    { id: 3, title: "Discord", linkTo: "https://discord.com" },
    { id: 4, title: "Medium", linkTo: "https://medium.com" },
    { id: 5, title: "Twitter", linkTo: "https://twitter.com" },
    { id: 6, title: "Linkedin", linkTo: "https://linkedin.com" },
  ]
  const resources = [
    // { id: 1, title: "Dark Paper", linkTo: "https://google.com" },
    // { id: 2, title: "MUDI", linkTo: "https://bscscan.com" },
    // { id: 3, title: "Market", linkTo: "https://discord.com" },
    // { id: 4, title: "MUDI Law", linkTo: "https://medium.com" },
    { id: 5, title: "Terms & Conditions", linkTo: "https://twitter.com" },
    { id: 6, title: "Privacy Policy", linkTo: "https://linkedin.com" },
  ]
  const openLink = (e: string) => {
    window.open(e, "_blank")
  }
  return (
    <Container className={classes.motherWrap} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img src={logo} alt="logo" />
          <Label mt="20px" fs="15px" color="#fffa" title="Mudi is the 1st multichain NFT metaverse content DAO. We help artists & brands get started with NFTs." />
        </Grid>
        <Grid item xs={12} md={4} className={classes.linksWrapper}>
          <LinksWrapper>
            <Label title="SOCIAL" fs="18px" mb="10px" fw={700} />
            {
              socialLinks.map((item) => (
                <Label title={item.title} mb="5px" mt="5px" color="#fffa" cursor="pointer" onClick={() => openLink(item.linkTo)} />
              ))
            }
          </LinksWrapper>
          <LinksWrapper>
            <Label title="RESOURCES" fs="18px" mb="10px" fw={700} />
            {
              resources.map((item) => (
                <Label title={item.title} mb="5px" mt="5px" color="#fffa" cursor="pointer" onClick={() => openLink(item.linkTo)} />
              ))
            }
          </LinksWrapper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Label title="WE ACCEPT BNB/MUDI" fs="18px" mb="10px" fw={700} />
          <Label title="Signup for our newsletter to get the latest news in your inbox." mb="5px" mt="5px" color="#fffa" />
          <EmailInput placeholder="Enter Your Email" />
          <LoginButton w="105px" h="40px" onClick={() => alert('Send email')}>Send</LoginButton>
        </Grid>
      </Grid>
      <hr style={{ marginTop: '3em' }} />
      <SpaceBetween>
        <CopyRight>
          <Label title="© Copyright 2022 - MUDI.store" mb="10px" mt="2em" color="#fffa" fw={400} />
        </CopyRight>
        <SocialWrapper>
          <img src={mail} alt="mail" onClick={() => window.open('https://google.com')} />
          <img src={twitter} alt="twitter" onClick={() => window.open('https://twitter.com')} />
          <img src={facebook} alt="facebook" onClick={() => window.open('https://facebook.com')} />
        </SocialWrapper>
      </SpaceBetween>

    </Container>
  )
}

export default Footer