import { Link, Route, Switch } from "wouter";
import React, {useState} from 'react';
import "./btn.css"
import {
  ChakraProvider,
  Box,
  Text,

  VStack,
  Code,
  Grid,
  theme,
  CSSReset,
} from '@chakra-ui/react';

import Fetch from './Assets/Fetch';
import Nav from './Assets/Nav';
import Item from './Assets/Item';
import Search_Char from './Assets/Search_Char';
import Result_char from "./Assets/Result_char";
import Nav_ham from "./Assets/Nav_ham";

function App() {
  const [nav_bg, setnav_bg] = useState(`#ff0000`)
  const [char, setchar] = useState(null)
  const [char_s, setchar_s] = useState(null)

  const [card_bg, setcard_bg] = useState("#6b6bff")
const [mode_txt, setmode_txt] = useState("Enable Dark Mode")
  const [nav_txt, setnav_txt] = useState(`white`)
  const [body_bg, setbody_bg] = useState(`#efe0ff`)
const [norm_text, setnorm_text] = useState("black")

  return (




      <Box textAlign="center" bg={"white"} fontSize="xl">
        <Grid  ml={"-.5vw"} w={"99.6vw"} overflowX={"hidden"} bg={"white"} p={3}>
          {/* <VStack spacing={8}> */}
            <Box  mt={"-.5vh"}>

            <Nav  nav_txt={nav_txt} mode_change={mode_txt} nav_bg={nav_bg} mode={mode} hamb={hamb}/>
            </Box>
            <Box display={"none"} transition={"all"} id="ham_disp" position={"fixed"} left={"0vw"} top={"6vh"} w={"99vw"}>
              <Nav_ham  norm_text={norm_text} nav_txt={nav_txt} mode_change={mode_txt} nav_bg={body_bg} mode={mode} hamb={hamb}/>
            </Box>
            <Box w={"99.75vw"} overflowX={"hidden"} bg={body_bg} pt={"5vh"}  h={"500vh"}>
              {/* <Search_Char/> */}
              <Switch>

<Route path="/">

         <Fetch txt={nav_txt} card_bg={card_bg} />
</Route>
<Route path="/char">

             <Search_Char valueInp={getInputValue}/>
</Route>
<Route path="/char_s">

           <Result_char char={char} txt={nav_txt} card_bg={card_bg} />
</Route> 
{/* <Route path="/series">

          <Search_ser valueInp_ser={getInputValue_ser}/>
</Route>  */}
{/* <Route path="/ser_s">
<Result_ser char={char_s}/>
</Route>  */}
              </Switch>


            </Box>

          {/* </VStack> */}
        </Grid>
      </Box>


  );
  function hamb(){
    let ham = document.getElementById("bar")
    let close= document.getElementById("close")
    let cont= document.getElementById("ham_disp")
    if(ham.style.display === "none"){
      close.style.display="none"
      ham.style.display="block"
      cont.style.display="none"
    }
    else{
      close.style.display="block"
      ham.style.display="none"
      cont.style.display="block"

    }
  }
  function getInputValue() {
    // Selecting the input element and get its value
    let inputVal = document.getElementById("hell").value;
    // Displaying the value
    console.log(inputVal)
   setchar(inputVal)
   console.log(char)
  } 
  // function getInputValue_ser() {
  //   // Selecting the input element and get its value
  //   let inputVal_s = document.getElementById("series").value;
  //   // Displaying the value
  //   console.log(inputVal_s)
  //  setchar_s(inputVal_s)
  //  console.log(char_s)
  // }
  function mode(){
    if(nav_bg==="#ff0000"){
    console.log(true)
    setnav_bg("#00103e")
    setnav_txt("red")
setmode_txt("Enable Light Mode")
setnorm_text("#00ffb8")
setbody_bg("#180038")
setcard_bg("#000070")
  }
  else{
    console.log(false)
    setnav_bg("#ff0000")
    setnav_txt("white")
setmode_txt("Enable Dark Mode")
setbody_bg("#efe0ff")
setcard_bg("#6b6bff")
setnorm_text("black")
  }
  }


}
export default App;
