import React, {userState, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider} from "react-native-paper";
import AuthScreem from "./src/screens/Auth";


export default function App() {
  const [auth, setAuth] = useState(undefined);
  return (
     <PaperProvider>

      {auth ? <text>Zona</text> : <AuthScreem />}
    </PaperProvider>
  );
}


const styles = StyleSheet.create({});
