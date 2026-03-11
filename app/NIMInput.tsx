import { Text, TextInput, View } from "react-native";

interface CustomProps {
    input: string; 
    onChange: (val: string) => void;
}

const NIMInput = ({
    input,
    onChange
}: CustomProps) => {
    console.log(input); 

    return (
        <View>
            <Text>NIM</Text>
            <TextInput 
                placeholder="Input your NIM/Student ID"
                style={{
                    borderColor: "black", 
                    borderWidth: 1, 
                    padding: 10, 
                    borderRadius: 8
                }}
                onChangeText={onChange}
                keyboardType="numeric"
            />
        </View>
    );
};

export default NIMInput;