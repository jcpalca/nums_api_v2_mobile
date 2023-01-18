import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import DrawerItems from "./DrawerItems";
import ExampleCarousel from "./ExampleCarousel"
import InteractiveTable from "./InteractiveTable"
import Documentation from "./Documentation"

const Drawer = createDrawerNavigator();

/** App: Top level component rendering ExampleCarousel
 *
 *  Props: none
 *
 *  State: none
 *
 *  App -> ExampleCarousel
 */

export default function App() {
  console.debug("App");
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Carousel"
        screenOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
        }}
      >
        {DrawerItems.map((drawer) => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            options={{
              drawerIcon: ({ focused }) =>
                drawer.iconType === "MaterialIcons" ? (
                  <MaterialIcons
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                ) : (
                  <SimpleLineIcons
                    name={drawer.iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                ),
            }}
            component={
              drawer.name === "Carousel"
                ? ExampleCarousel
                : drawer.name === "Try It Out!"
                ? InteractiveTable
                : Documentation
            }
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
