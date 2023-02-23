import React from 'react';
import styled from "styled-components";
import Image from "../assets/image.jpg";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';

//FIREBASE
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import { initializeApp } from 'firebase/app';
import 'firebase/database';
import { useState } from 'react';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxERYoSMOpHeBp2C33AAUKWJka5UlKGNI",
  authDomain: "authentication-10e10.firebaseapp.com",
  projectId: "authentication-10e10",
  storageBucket: "authentication-10e10.appspot.com",
  messagingSenderId: "659484462730",
  appId: "1:659484462730:web:4035aff3527bd18291a773"
};

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #6a4fb0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;
const Content = styled.div`
  width: 25%;
  height: 90%;
  background: linear-gradient(to top,#aed8f7,white 75%);
  border-radius: 1rem;
  box-shadow: 5px 5px 25px -5px;
  @media (max-width: 768px) {
    width: 80%;
    height: 85%;
  }
`;
const ImageContainer = styled.img`
   width: 50%;
   height: 20vh;
   display: flex;
   margin: 0 25% 0 25%;
   @media (max-width: 768px) { 
    width: 50%;
  }
`;
const TextContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 10%;
  @media (max-width: 768px) { 
    margin: 5% 0 5% -10%;
  }
`;
const Title = styled.h3`
  color: #6249a3;
  margin-bottom: 1%;
  font-size: 1rem;
  font-weight: 700;
  @media (max-width: 768px) { 
    width: 100%;
    margin: 0 20px 10px 20px;
  }
`;
const Body = styled.h6`
  font-weight: 500;
  font-size: 0.75rem;
  @media (max-width: 768px) { 
    width: 100%;
    margin: 10px 20px 0px 20px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) { 
    width: 100%;
    margin-left: 2%;
  }
`;
const Input = styled.input`
  flex: 1;
  width: 85%;
  margin: 20px 0px 10px 20px;
  padding: 10px 5px 10px 5px;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin: 45px 0px 0px 20px;
  padding: 10px 5px 10px 5px;
  background-color: #6a4fb0;
  color: white;
  cursor: pointer;
  width: 85%;
`;
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("created");
        firebase.database().ref(`users/${user.uid}`).set({
          email: email,
          password: password
        });
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
  }; 
  return (
    <Container>
        <Content>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
          <ImageContainer src = {Image} /></motion.div>
          <TextContainer>
            <Title>
            <motion.h2 initial={{color: "white",opacity: 0}} animate={{color: "#6249a3",opacity: 1}} transition={{ duration: 2.0 }}>
              Welcome to Bardeen
            </motion.h2></Title>
            <Body>
            <motion.h2 initial={{color: "white",opacity: 0}} animate={{color: "black",opacity: 1}} transition={{ duration: 3.0}}>
              Let's signup in to launch your automations.
            </motion.h2>
            </Body>
          </TextContainer>
          <Form>
            <Input placeholder="Email Address" name="Email Address" type="text" id="email" value={email} onChange={handleEmailChange}/>
            <Input placeholder="Password" name="password" type="password" id="password" value={password} onChange={handlePasswordChange}/>
            <Button onClick={handleSignUp}>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>Sign Up</motion.button></Button>
          </Form>
        </Content>   
    </Container>
  );
}


export default Signup;