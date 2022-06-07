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

export default function Nav_ham(props) {
  return (
   <Grid p={"5vw"} bg={props.nav_bg} zIndex={"1"} pt={"5vh"} fontWeight={"600"} placeContent={"center"} color={props.norm_text}>
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


                     <Box ml={"1vw"}>

                        <label class="form-check-label" htmlfor="flexSwitchCheckDefault">{props.mode_change}</label>
                     </Box>
                  <div style={{display:"grid", placeContent:"center"}} onClick={props.mode} class="form-check form-switch">
                     <input style={{width:"35px"}} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>

   </Grid>
  )
}
