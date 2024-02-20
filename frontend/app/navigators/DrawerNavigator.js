import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";


import Home from "../screen/timeline/NewsFeed";
import Login from "../screen/auth/Login";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>

<Drawer.Screen name="Home" component={TabNavigator} />
      
      
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;