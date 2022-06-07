import React, { useEffect, useState } from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import Item from './Item';
export default function Fetch(props) {
  const [marvel, setMarvel] = useState([]);
  const public_key = process.env.REACT_APP_PUBLIC_KEY

  const private_key = process.env.REACT_APP_PRIVATE_KEY
  const hash = process.env.REACT_APP_HASH_MD5
  const auth = `ts=1&apikey=${public_key}&hash=${hash}`
  const base_url = "https://gateway.marvel.com"
  const req_url = "/v1/public/characters"
  const [isLogged, setisLogged] = useState(false)
  useEffect(() => {
    const url = `http://gateway.marvel.com/v1/public/comics?ts=1&limit=20&apikey=${public_key}&hash=${hash}`
      ;

console.log(url)
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        //  console.log(json.data.results[0]);
        setMarvel(json.data.results);
        setisLogged(true)
      } catch (error) {
        //  console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (isLogged) {


    return (
      // <>
        // <React.StrictMode>
      <ChakraProvider>

          <Flex w={"90vw"} ml="10vw" justifyContent={"space-evenly"} alignSelf={"center"} alignItems={"center"} justifySelf={"center"} >

            <div className="row"  >
            <Text fontWeight={"700"} color={props.txt} mt={"5vh"} fontSize={"4xl"}>Comics</Text>

              {marvel.map((e) => {
                return <div style={{display:'grid', placeContent:"center", margin:"1vw"}} className="col-md-3">



                  <Box mt={"4vh"} key={e.id}>

                    <Item key={e.id} img={e.thumbnail.path + "/portrait_xlarge.jpg"} card_bg={props.card_bg} id={e.id} auth={base_url + req_url + "?" + auth} desp={e.description.slice(0,80)} url={e.urls[0].url} txt={props.txt} price={e.prices[0].price } title={e.title.slice(0,20)} />
                  </Box>

                </div>






})}
            </div>


          </Flex>
</ChakraProvider>
     
      
  
    )
  }
  else {
    return (
      <ChakraProvider>

        <Text color={props.txt} fontWeight={"700"} mt={"5vh"} fontSize={"4xl"}>Loading Please Wait...</Text>
      </ChakraProvider>
    )
  }
}

