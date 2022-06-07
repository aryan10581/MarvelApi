import React, { useEffect, useState } from 'react'
import {
  ChakraProvider,
  Box,
  Text,
 
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { Link, Route, Switch } from "wouter";
import Result_char from './Result_char';

export default function Search_Char(props) {
 
  return (
    <Switch>

   <ChakraProvider>
     <Grid>
       <Flex w={["70vw","70vw","30vw"]} flexDirection={["column","column",  "row"]} alignSelf="center" justifyContent={"center"} justifySelf={"center"} mt="2vh">
       <input onInput={props.valueInp}  class="form-control me-2" id='hell' type="search" placeholder="Search Marvel Character By Name" aria-label="Search"/>
       <Link accessKey='s'  href="/char_s">
         <Box  w={["70vw","70vw","10vw"]} mt={["2vh","2vh", "0vh"]}>

        <button  class="btn btn-outline-success" type="submit">Search</button>
         </Box>
       </Link>
       </Flex>
        <Route path="/char_s">

           <Result_char  />
</Route> 
     </Grid>

   </ChakraProvider>
    </Switch>
  )
}
