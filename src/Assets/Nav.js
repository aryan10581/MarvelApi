import React from 'react'
import "../btn.css"
import { Link, Route, Switch } from "wouter";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import "./Nav.css"
import Close from "./Img/icon_close.png"

import Bars from "./Img/bars-solid.svg"
export default function Nav(props) {
   return (
      <ChakraProvider>
         <Box position={"fixed"} zIndex={"5"} top={"0vh"} w={"99.8vw"} display="grid" bg={props.nav_bg} color={props.nav_txt} placeItems={"center"}>

            <Flex w={"90vw"} h="6vh" alignSelf="center" alignItems={"center"} justifyContent={"space-between"}>
               <Box className='logo' fontSize={["md","md","3xl"]} fontWeight={"700"}>
                  Marvel || WebDevVision
               </Box>
               <Box position={"fixed"} right={"5vw"} w={"3vw"} onClick={props.hamb} display={"none"} id="for">
                  <img src={Bars} id="bar" alt="" />
                  <img src={Close} alt="" id='close' />
               </Box>
               <Grid>

               </Grid>
               <Flex w={"50vw"}  id="mid" alignItems={"center"} justifyContent="space-evenly">
                  <Link href='/' >
                     <Text cursor={"pointer"} fontSize={"xl"} textDecoration={"none"}>
                        Home
                     </Text>
                  </Link>
                  <a href="https://webdevvision.netlify.app" target={"_blank"}>
                     <Text fontSize={"xl"} textDecoration={"none"}>
                        Visit Our Website
                     </Text>
                  </a>
                  <a >
                     <Link href='/char'>
                        <Text cursor={"pointer"} fontSize={"xl"} textDecoration={"none"}>
                           Characters
                        </Text>
                     </Link>
                  </a>


                  <div onClick={props.mode} class="form-check form-switch">
                     <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                     <Box ml={"1vw"}>

                        <label class="form-check-label" htmlfor="flexSwitchCheckDefault">{props.mode_change}</label>
                     </Box>
                  </div>
               </Flex>
            </Flex>
         </Box>
      </ChakraProvider>
   )
}
