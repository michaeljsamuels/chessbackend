import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button"
import UserProfile from "@/components/UserProfile";

const PlaceholderImage = require('@/assets/images/logo.png');

export default function Index() {
  return (
    <View
      style={styles.container
      }      
    >
  
  

      <View style={styles.imageContainer}>

       { <ImageViewer imgSource={PlaceholderImage}/>}
      
      </View>

  

      <View style={styles.footerContainer}>
        <Button theme = "primary"label="Play a New Game!" />
        <Button label="Save a Game!" />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
     alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
   image: {
    width: 160,
    height: 220,
    borderRadius: 10,
  },
  footerContainer: {
    flex: 1/3 ,
    alignItems: 'center',
  },

});
