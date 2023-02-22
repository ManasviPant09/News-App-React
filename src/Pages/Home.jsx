import React from 'react'
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import FetchData from '../Components/FetchData';
const Container = styled.div`
`;
const Wrapper = styled.div`
`;
const Home = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Navbar />
                <FetchData />
            </Wrapper>
        </Container>
    </div>
  );
}

export default Home;
