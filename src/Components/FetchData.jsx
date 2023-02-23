import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px; /* set a fixed height for the card */
  overflow: hidden; /* hide any content that exceeds the card height */
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2em;
  height: 2.4em; /* limit the title to 2 lines */
  overflow: hidden; /* hide any content that exceeds the height */
  text-overflow: ellipsis; /* add an ellipsis if the title exceeds the width */
`;
const Description = styled.div`
  font-size: 16px;
  line-height: 1.2em;
  height: 7.2em; /* limit the description to 6 lines */
  overflow: hidden; /* hide any content that exceeds the height */
  text-overflow: ellipsis; /* add an ellipsis if the description exceeds the height */
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
  // let a = data.map((items)=>{
  //       <div className="p-8">
  //       <div className="max-w-sm rounded overflow-hidden shadow-lg">
  //       <img className="w-full" src={items.urlToImage}/>
  //       <div className="px-6 py-4">
  //           <div className="font-bold text-xl mb-2">{items.title}</div>
  //           <p className="text-gray-700 text-base">{items.description}</p>
  //           <button className="font-bold text-xl mb-2"> <a href={items.url}>Read more</a></button>
  //       </div>
  //       </div>
  //       </div>
  // });
  // console.log(a);
  return (
    <div class="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">
    {data ? data.map((items,index)=>(
        <>
        <Card key={index}>
        <div className="p-8">
         <div className="max-w-sm rounded overflow-hidden shadow-lg">
         <img className="w-full" src={items.urlToImage}/>
         <div className="px-6 py-4">
             <Title><div className="font-bold text-xl mb-2">{items.title}</div></Title>
             <Description><p className="text-gray-700 text-base">{items.description}</p> </Description>
             <button className="font-bold text-xl mb-2"> <a href={items.url}>Read more</a></button>
         </div>
         </div>
         </div>
         </Card>
    </>
    ))
    : "Not able to fetch"}
    </div>
  );
}

export default FetchData;
