import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  return <>
    <StatusBar/>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  </>
}