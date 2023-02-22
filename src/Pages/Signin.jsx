import React, { useEffect } from 'react';
import styled from "styled-components";
import Image from "../assets/image.jpg";
import {GoogleButton} from "react-google-button";
import {GithubButton} from "react-github-login-button";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
  margin: 0px 10px 10px 13px;
  padding: 10px 5px 10px 5px;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
`;
const Help = styled.div`
  display: flex;
  flex-direction: row;
  margin: -25px 17px 0 15px;
  color: #6249a3;
`
const Left = styled.h6`
  display: flex;
  align-items: center; 
  flex : 1;
`;
const Right = styled.h6`
  display: flex;
  align-items: center;
  justify-content : flex-end;
  flex : 1;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  margin: -15px 0px 0px 12px;
  padding: 10px 5px 10px 5px;
  background-color: #6a4fb0;
  color: white;
  cursor: pointer;
  width: 90%;
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
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
      });
  };

  return (
    <Container>
        <Content>
            <ImageContainer src = {Image} />
            <TextContainer>
                <Title>Welcome to Bardeen</Title>
                <Body>Let's log in to launch your automations.</Body>
            </TextContainer>
            <Form>
              <Input placeholder="Email Address" name="Email Address" type="text" id="email" value={email} onChange={handleEmailChange}/>
              <Input placeholder="Password" name="password" type="password" id="password" value={password} onChange={handlePasswordChange}/>
              <Help>
                <Left><Link to="/signup" style={{ textDecoration: "none",color: "#6249a3"}}>Create Account</Link></Left>
                <Right>Forgot Password?</Right>
              </Help>
              <Button onClick={handleSignIn}>Sign In</Button>
              <GoogleButton onClick={handleGoogleSignIn}style=
              {{backgroundColor: "white", 
                color: "#606060",
                width: "90%",
                height: "10vh",
                // padding: 0,
                fontSize: "15px",
                margin: "10px 0 0 12px",
                borderRadius: "5px",
                textAlign: "center",
                display: "flex",
                alignItems: "center"
                }}/>
                <GithubButton onClick={handleGitHubSignIn} type="light" style=
              {{backgroundColor: "white", 
                color: "#606060",
                width: "90%",
                height: "10vh",
                // padding: 0,
                fontSize: "15px",
                margin: "10px 0 0 12px",
                borderRadius: "5px",
                textAlign: "center",
                display: "flex",
                alignItems: "center"
                }}/>
            </Form>
        </Content>   
    </Container>
  );
}
export default Signin;