import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../Components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
<View style={styles.timingButton}>
 <RoundedButton size={75} title="10" onPress={()=>onChangeTime(10)}/>
</View>
<View style={styles.timingButton}>
 <RoundedButton size={75} title="20" onPress={()=>onChangeTime(20)}/>
</View>
<View style={styles.timingButton}>
 <RoundedButton size={75} title="25" onPress={()=>onChangeTime(25)}/>
</View>
</>
  )
}

const styles=StyleSheet.create ({
  timingButton: {
    flex: 1,
    alignItems: "center"
  }
})