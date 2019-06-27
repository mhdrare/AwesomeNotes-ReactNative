import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import Home from "./src/screens/home";
import Category from "./src/screens/addCategory";
import Notes from "./src/screens/addNotes";
import singleNotes from "./src/screens/singleNotes";
import DrawerNavigator from './src/components/drawerNavigator';

const AppNavigator = createDrawerNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			drawerLabel: () => null
		}
	},
	Notes: {
		screen: Notes,
		navigationOptions: {
			drawerLabel: () => null
		}
	},
	singleNotes: {
		screen: singleNotes,
		navigationOptions: {
			drawerLabel: () => null
		}
	},
	Category: {
		screen: Category,
		navigationOptions: {
			drawerLabel: () => null
		}
	}
}, {
	contentComponent: DrawerNavigator
});

export default createAppContainer(AppNavigator);