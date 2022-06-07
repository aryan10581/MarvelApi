import { Link, Route, Switch } from "wouter";
import React, { useState, useEffect } from 'react';

import {
  ChakraProvider,
  Box,
  Text,

  VStack,
  Code,
  Grid,
  theme,
  CSSReset,
  Flex
} from '@chakra-ui/react';
import Item from "./Item";
import { SimpleGrid } from '@chakra-ui/react'
import Item_char from "./Item_char";
export default function Result_char(props) {
  const [marvel, setMarvel] = useState([]);
  const public_key = process.env.REACT_APP_PUBLIC_KEY

  const private_key = process.env.REACT_APP_PRIVATE_KEY
  const hash = process.env.REACT_APP_HASH_MD5
  const auth = `ts=1&apikey=${public_key}&hash=${hash}`
  const base_url = "https://gateway.marvel.com"
  const req_url = "/v1/public/characters"
  const [isLogged, setisLogged] = useState(false)
  const char = props.char
  console.log(char)
  
  useEffect(() => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${char}&limit=100&ts=1&apikey=${public_key}&hash=${hash}`
      ;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data.results);
        setMarvel(json.data.results);
        setisLogged(true)
        console.log(url)
        
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);

console.log(marvel.description)
if (isLogged) {
  return (


<Flex w={"90vw"}  ml={["0vw","0vw","0vw","10vw"]} justifyContent={"space-evenly"} alignSelf={"center"} justifySelf={"center"} >

<div  className="row" >
  
      {marvel.map((e) => {
        return <div style={{display:'grid', placeContent:"center", margin:"1vw"}} className="col-md-3">



<Box mt={"4vh"} key={e.id}>

          <Item_char   txt={props.txt} img={e.thumbnail.path + "/portrait_xlarge.jpg"} url={e.urls[1].url} title={e.name.slice(0,20)} desp={e.description.slice(0,80)} ch_url={e.urls[0].url} card_bg={props.card_bg} />
</Box>

        </div>






})}
</div>
    

</Flex>


  )
}
else{
  return(
    <h1>Loading Please Wait</h1>
  )
}
}
