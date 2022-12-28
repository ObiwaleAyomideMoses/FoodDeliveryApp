import { useContext } from "react";
import { NavigationScreenProp, NavigationRoute, NavigationParams, NavigationContext } from "react-navigation";
export function useNavigation(){
    return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>
}