import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps37520Navigator from '../features/Maps37520/navigator';
import Add-Item37516Navigator from '../features/Add-Item37516/navigator';
import Maps37515Navigator from '../features/Maps37515/navigator';
import UserProfile37469Navigator from '../features/UserProfile37469/navigator';
import Maps37465Navigator from '../features/Maps37465/navigator';
import Add-Item37461Navigator from '../features/Add-Item37461/navigator';
import Maps37460Navigator from '../features/Maps37460/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps37520: { screen: Maps37520Navigator },
Add-Item37516: { screen: Add-Item37516Navigator },
Maps37515: { screen: Maps37515Navigator },
UserProfile37469: { screen: UserProfile37469Navigator },
Maps37465: { screen: Maps37465Navigator },
Add-Item37461: { screen: Add-Item37461Navigator },
Maps37460: { screen: Maps37460Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
