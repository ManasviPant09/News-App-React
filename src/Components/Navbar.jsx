import React from 'react';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HelpIcon from '@mui/icons-material/Help';
import styled from 'styled-components';
const Container = styled.div`
  height: 10vh;
  background-color: black;
  padding: 10px 0px 10px 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left : 7px;
  padding-right : 7px;
`;
const Left = styled.div`
  display: flex;
  align-items: center; 
  flex : 1;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center; 
  flex : 1;
`;
const Title = styled.h5`
  margin: 10px 15px 10px 15px;
  font-size: 15px;
  color: white;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content : flex-end;
  flex : 1;
  margin-right: 20px;
`;
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <NewspaperOutlinedIcon style={{fontSize: "30px",color: "white"}} />
                <TextContainer>
                    <Title>LEARN</Title>
                    <Title>BLOG</Title>
                    <Title>WHAT'S NEW</Title>
                    <Title>BOOKMARKS</Title>
                    <Title>SUBSCRIBE</Title>
                </TextContainer>
            </Left>           
            <Right>
                <TwitterIcon style={{margin: "10px 10px 10px 10px",color: "white"}}/>
                <InstagramIcon style={{margin: "10px 10px 10px 10px",color: "white"}} />
                <MailOutlineIcon style={{margin: "10px 10px 10px 10px",color: "white"}}/>
                <HelpIcon style={{margin: "10px 10px 10px 10px",color: "white"}}/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
