import { Text, View, Pressable, StyleSheet } from "react-native";

export default function AddNotesScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Add a new note</Text>
            <Pressable onPress={() => navigation.navigate('Notes')}>
                <Text>Go back to Notes</Text>
            </Pressable>
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
});