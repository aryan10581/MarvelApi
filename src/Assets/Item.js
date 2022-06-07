import React from 'react'
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
  } from '@chakra-ui/react';
import Fetch from './Fetch';
export default function Item(props) {
  
  return (
      <ChakraProvider>
        

    <Box color={props.txt} w={["70vw", "60vw", "20vw"]} p="1vw" borderRadius={"10px"} h={"55vh"} display={"grid"} placeItems={"center"} bg={props.card_bg}>
        <Box borderRadius={"10px"} overflow={"hidden"}>

       <img src={props.img} alt="" />
        </Box>
       <Text fontWeight={"600"}  fontSize={"xl"}>{props.title}...</Text>
       <Text>{props.desp}...&nbsp;&nbsp;&nbsp;
       <a href={props.url} target="_blank">Learn More</a></Text>
       <Text>Price: ${props.price}</Text>
    </Box>
      </ChakraProvider>
  )
}
