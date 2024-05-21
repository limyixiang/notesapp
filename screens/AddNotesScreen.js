import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function AddNotesScreen({ navigation }) {
    const [title, onChangeTitle ] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Add a new note</Text>
            <TextInput style={styles.textInput} value={title} onChangeText={onChangeTitle} />
            <View style={styles.buttons}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Notes', { title });
                    }}
                    style={ [styles.button, styles.submitButton] }>
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={ [styles.button, styles.cancelButton] }>
                    <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 20,
        width: '80%',
    },
    buttons: {
        flexDirection: 'row',
        gap: 20,
    },
    button: {
        padding: 10,
        margin: 5,
    },
    submitButton: {
        backgroundColor: 'green',
    },
    cancelButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
});