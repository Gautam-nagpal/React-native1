import { DrawerNavigator } from "react-navigation";

import Homescreen from "./screens/Homescreen";
import Infoscreen from "./screens/Info";
import Settingscreen from "./screens/Settingscreen";
import Cloudscreen from "./screens/Cloudscreen";
import { Home, Info, Setting, Cloud } from "./screenNames";

var { height, width } = Dimenstions.get("window");

let routeConfigs = {
  Home: {
    path: "/",
    screen: Homescreen
  },
  Info: {
    screen: Infoscreen
  },
  Setting: {
    screen: Settingscreen
  },
  Cloud: {
    screen: Cloudscreen
  }
};

let DrawerNavigatorConfig = {
  initialRouteName: Home,
  drawerWidth: width / 2,
  drawerPosition: "left",
  drawerOpenRoute: "DrawerOpen",
  drawerCloseRoute: "DrawerClose",
  drawerToggleRoute: "DrawerToggle",
  contentOption: {
    activeTintColor: "red"
  }
};

const Yes = DrawerNavigator(routeConfigs, DrawerNavigatorConfig);

AppRegistry.registerComponent("project1", () => App);
