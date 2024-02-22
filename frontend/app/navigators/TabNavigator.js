import React, { Profiler } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Chat from '../screen/timeline/Chat'
import Reels from '../screen/timeline/Reels'
import NewsFeed from "../screen/timeline/NewsFeed";
import Profile from '../screen/auth/Profile'
import Search from "../screen/timeline/Search";
import PostInfo from "../screen/timeline/PostInfo";

import { MaterialIcons,Entypo,Feather } from '@expo/vector-icons';
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import UploadPost from "../screen/timeline/UploadPost";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator >
      
      

    
      <Tab.Screen name="Feed" component={NewsFeed} options={{
      tabBarLabel: 'Feed',tabBarShowLabel:false,
      tabBarIcon: ({ color, size }) => (
<Entypo name="home" size={24} color="black" />
      ),
    }} />

<Tab.Screen name="Search" component={Search} options={{
      tabBarLabel: 'Search',
      tabBarIcon: ({ color, size }) => (
<Feather name="search" size={24} color="black" />
      ),
    }} />
<Tab.Screen name="Post" component={UploadPost} options={{
      tabBarLabel: 'Post',
      tabBarIcon: ({ color, size }) => (
<Feather name="plus-square" size={24} color="black" />
      ),
    }} />


      <Tab.Screen name="Reels" component={Reels} options={{
      tabBarLabel: 'Reels',
      tabBarIcon: ({ color, size }) => (
<Entypo name="video" size={24} color="black" />
      ),
    }} />

      <Tab.Screen name="Profile" component={Profile} options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
<FontAwesome name="user-circle-o" size={24} color="black" />
      ),
    }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;