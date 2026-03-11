import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"; 

interface CustomProps {
    input: string; 
    onChange: (val: string) => void;
}

const CustomTextInput = ({
    input, 
    onChange
}: CustomProps) => {
    console.log(input); 

    return(
        <View>
            <Text>Name</Text>
            <TextInput 
                placeholder="Input your name"
                style={{
                    borderColor: "black", 
                    borderWidth: 1, 
                    padding: 10, 
                    borderRadius: 8
                }}
                onChangeText = {onChange}
            />
        </View>
    );
};

export default CustomTextInput;