import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h3`
`;
const FetchData = () => {
  const [data,setData] = useState("");
  const fetchData = async () =>{
    await axios
    .get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=930cef6e6eff470288ce8108a39110fe"
    )
    .then((res)=>setData(res.data.articles));
  }
  useEffect(()=>{
    fetchData();
  });
  return (
    <Container>
        {data ? data.map((items,index)=>
          <MainContainer>
            <Wrapper>
                <Title>{items.title}</Title>
            </Wrapper> 
          </MainContainer>       
        ) : "Not able to fetch"}      
    </Container>
  )
}

export default FetchData
