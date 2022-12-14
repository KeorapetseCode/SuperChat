import { StatusBar } from 'expo-status-bar';
import { useAssets } from "expo-asset";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) =>{
      setLoading(false);
      if (user) {
        setCurrUser(user);
      }
    });
    return () => unsub();
  }, []);

  if (loading){
    return <Text>Still Loading....</Text>
  }
  else{
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(currUser)}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Main() {
  const [myAssets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    //require("/assets/welcome-img2.png"),
    require("./assets/user-icon.png"),
  );
  if (!myAssets)
    return <Text>Assets are still trying to load...</Text>
  else
    return <App />
}

export default Main
