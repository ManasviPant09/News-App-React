import React from 'react'
import styled from 'styled-components';
import NewsNavbar from '../Components/NewsNavbar';
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
                <NewsNavbar />
                <FetchData />
            </Wrapper>
        </Container>
    </div>
  );
}

export default Home;
