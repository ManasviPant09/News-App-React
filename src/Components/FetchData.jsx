import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FetchData = () => {
  const [data,setData] = useState("");
  const fetchData = async () =>{
    await axios
    .get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ecb8e678f9214d078373268968f2ec27"
    )
    .then((res)=>setData(res.data.articles));
  }
  useEffect(()=>{
    fetchData();
  },[]);
  let w = { width: "400px" };
  let a = data.map((items)=>{
    return(
        <div className="p-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={items.urlToImage}/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{items.title}</div>
            <p className="text-gray-700 text-base">{items.description}</p>
            <button className="font-bold text-xl mb-2"> <a href={items.url}>Read more</a></button>
        </div>
        </div>
        </div>
    )
  });
  console.log(a);
  return (
    <Container>
        <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
            {a}</div>;
    {/* {data ? data.map((items,index)=>(
        <>
        <div className="p-8"></div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={items.urlToImage}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{items.title}</div>
                <p className="text-gray-700 text-base">{items.description}</p>
                <button className="font-bold text-xl mb-2"> <a href={items.url}>Read more</a></button>
            </div>
        </div>
    </>
    ))
    : "Not able to fetch"} */}
    </Container>
  );
}

export default FetchData
