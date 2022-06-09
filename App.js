import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Home from "./NINJA/home";
import MainContainer from "./NINJA/maincontainer";
import Navigator from "./NINJA/drawer";
import Bravo from "./NINJA/drawer";
import Navigation from "./WHATSAPP/navigation";
import Whatsapp from "./WHATSAPP/whatsapp";
import ShoppingNavigate from "./RESTAURANT/COMPONENT/navigate";
import FOODAPPNAVIGATE from "./FOODAPP/SCREENS/navigation";
import MashTutorial from "./MASH/practice1";
import Practice2 from "./MASH/practice2";

import QuizHomeScreen from "./QUIZAPP/home";
import QUIZSTACK from "./QUIZAPP/quizstack";
import FoodNav from "./FOODAPP/SCREENS/navigation";
import SignalStack from "./SIGNAL/screens/SignalStack";
import StackFile from "./PING/StackFile";
import BingStack from "./BING/BingStack";
import Rootstack from "./NIMATED/Rootstack";
import SliderNav from "./RNONBOARD/Stack";
import TodoApp from "./TODOS/TodoApp";





export default function App(){
    return(
        // <StackFile/>
            // <BingStack/>
        // <Rootstack/>

        <TodoApp/>

        // <SliderNav/>

        // <SignalStack/>
        // <QUIZSTACK/>
        // <ShoppingNavigate/>
        // <FoodNav/>
        // <MashTutorial/>
        // <Practice2/>
    //    <Navigation/>
        // <Whatsapp/>
        // <WhatsappHeader/>
        // <MainContainer/>
        // <Bravo/>
    )
};