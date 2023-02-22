import React from 'react';
import styled from "styled-components";
import Image from "../assets/image.jpg";
import {GoogleButton} from "react-google-button";
import {GithubButton} from "react-github-login-button";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #6a4fb0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Content = styled.div`
  width: 23%;
  height: 85vh;
  background: linear-gradient(to top,#aed8f7,white 75%);
  border-radius: 15px;
  box-shadow: 5px 5px 25px -5px;
`;
const ImageContainer = styled.img`
   width: 50%;
   height: 20vh;
`;
const TextContainer = styled.div`
  margin-top: 5%;
`;
const Title = styled.h3`
  color: #6249a3;
  margin-bottom: -23px;
  font-size: 17px;
`;
const Body = styled.h6`
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  width: 85%;
  margin: 10px 10px 10px 13px;
  padding: 20px 5px 20px 5px;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin: 25px 0px 0px 12px;
  padding: 20px 5px 20px 5px;
  background-color: #6a4fb0;
  color: white;
  cursor: pointer;
  width: 90%;
`;
const Signup = () => {
  return (
    <Container>
        <Content>
            <ImageContainer src = {Image} />
            <TextContainer>
                <Title>Welcome to Bardeen</Title>
                <Body>Let's log in to launch your automations.</Body>
            </TextContainer>
            <Form>
              <Input placeholder="Email Address" name="Email Address" type="text"/>
              <Input placeholder="Password" name="password" type="password"/>
              <Button>Sign Up</Button>
            </Form>
        </Content>   
    </Container>
  );
}


export default Signup;