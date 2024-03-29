import React, { useEffect } from 'react';
import styled from "styled-components";
import Image from "../assets/image.jpg";
import {GoogleButton} from "react-google-button";
import {GithubButton} from "react-github-login-button";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {motion} from "framer-motion";

//FIREBASE
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import { initializeApp } from 'firebase/app';
import 'firebase/database';

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
  font-size: 100%;
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
    margin-left: 0.75%;
  }
`;
const Input = styled.input`
  flex: 1;
  width: 85%;
  margin: 0 0 5% 7%;
  padding: 3% 1% 3% 1%;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
`;
const Help = styled.div`
  display: flex;
  flex-direction: row;
  margin: -4% 8% 10% 8%;
  color: #6249a3;
  @media (max-width: 768px) { 
    margin-right: 10%;
  }
`
const Left = styled.h6`
  display: flex;
  align-items: center; 
  flex : 1;
  font-size: 12px;
`;
const Right = styled.h6`
  display: flex;
  align-items: center;
  justify-content : flex-end;
  flex : 1;
  font-size: 12px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin: -5% 8% 10% 8%;
  padding: 3% 1% 3% 1%;
  background-color: #6a4fb0;
  color: white;
  cursor: pointer;
  width: 84%;
`;
const ButtonContainer = styled.div`
  @media (max-width: 768px) { 
    margin-right: 10%;
}
`;
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  //SIGN IN WITH GOOGLE
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const db = firebase.database();
        db.ref('users/' + user.uid).set({
          name: user.displayName,
          email: user.email
        });
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  //SIGN IN WITH GITHUB
  const handleGitHubSignIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const db = firebase.database();
        db.ref('users/' + user.uid).set({
          name: user.displayName,
          email: user.email,        
        
        });
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("This account already exists, try using a different account!")
      });
  };
  const GoogleStyle = {
    backgroundColor: "white", 
    color: "#606060",
    width: "85%",
    height: "10vh",
    fontSize: "15px",
    margin: "-5% 8% 8% 8%",
    borderRadius: "5px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",

  }
  const GithubStyle = {
    backgroundColor: "white", 
    color: "#606060",
    width: "85%",
    height: "10vh",
    fontSize: "15px",
    margin: "-5% 8% 10% 8%",
    borderRadius: "5px",
    textAlign: "center",
    display: "flex",
    alignItems: "center"
  }

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
            </motion.h2>                  
          </Title>
          <Body>
          <motion.h2 initial={{color: "white",opacity: 0}} animate={{color: "black",opacity: 1}} transition={{ duration: 3.0}}>
            Let's log in to launch your automations.
          </motion.h2>
          </Body>
        </TextContainer>
        <Form>
          <Input placeholder="Email Address" name="Email Address" type="text" id="email" value={email} onChange={handleEmailChange}/>
          <Input placeholder="Password" name="password" type="password" id="password" value={password} onChange={handlePasswordChange}/>
          <Help>
            <Left><Link to="/signup" style={{ textDecoration: "none",color: "#6249a3"}}>Create Account</Link></Left>
            <Right>Forgot Password?</Right>
            </Help>
           <Button onClick={handleSignIn}>
           <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}>
            Sign In</motion.button>
          </Button>
          <ButtonContainer>
          <GoogleButton onClick={handleGoogleSignIn}style={GoogleStyle}/>
          <GithubButton onClick={handleGitHubSignIn} type="light" style={GithubStyle}/>
          </ButtonContainer>
        </Form>
      </Content>   
    </Container>
  );
}
export default Signin;
