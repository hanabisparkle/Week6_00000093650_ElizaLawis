import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import UserInput from "./input";


export default function Index() {
  const [name, setName] = useState(""); 
  
  const handleChangeMyName = (value: string) => {
    setName(value);
  }

  const [id, setId] = useState(""); 
  
  const handleChangeMyId = (value: string) => {
    setId(value);
  }

  return (
    <View
      style={styles.container}
    >
      <Text>Name - Id</Text>
      <Text>{name} - {id}</Text>

      <UserInput 
        name={""} 
        id={""} 
        handleChangeMyName={handleChangeMyName} 
        handleChangeMyId={handleChangeMyId}        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff", 
    alignItems: "center", 
    justifyContent: "center", 
    flex: 1, 
    gap: 8
  }
})