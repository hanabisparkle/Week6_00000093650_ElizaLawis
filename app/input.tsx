import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"; 
import CustomTextInput from "./CustomTextInput";
import NIMInput from "./NIMInput";

interface InputProps{
    name: string,
    id: string, 
    handleChangeMyName: () => void,
    handleChangeMyId: () => void

}

const UserInputs = ({
    name, id, handleChangeMyName, handleChangeMyId
}: InputProps) => {
    return (    
        <View>
            <CustomTextInput
                onChange={handleChangeMyName}
                input={name}
            />
            <NIMInput
                onChange={handleChangeMyId}
                input={id}
            />
        </View>
    );
};

export default UserInputs;