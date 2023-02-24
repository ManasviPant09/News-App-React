import React from 'react'
import styled from 'styled-components';
import NewsNavbar from '../Components/NewsNavbar';
import FetchData from '../Components/FetchData';
import Footer from '../Components/Footer';

const Container = styled.div`
`;
const Wrapper = styled.div`
`;
const Home = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <NewsNavbar />
                <FetchData />
                <Footer />
            </Wrapper>
        </Container>
    </div>
  );
}

export default Home;
