import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function NotesScreen({ route, navigation }) {
    
    const [notes, setNotes] = useState([
        { id: "1", title: "Walk the dog" },
        { id: "2", title: "Some thoughts about useEffect and its various modes" },
        { id: "3", title: "Think about why I joined this CODEEXP" },
    ]);

    function addNote() {
        // let newNote = {
        //     id: `${notes.length + 1}`,
        //     title: "Sample new note",
        // };
        // setNotes([...notes, newNote]);
        navigation.navigate('Add Note');
    }
    
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable onPress={addNote}>
                        <Entypo name="new-message" size={24} color="black" />
                    </Pressable>
                );
            },
        });
    });

    useEffect(() => {
        if (route.params?.title) {
            const newNote = {
                title: route.params.title,
                id: notes.length.toString()
            };
            setNotes([...notes, newNote]);
        }
    }, [route.params?.title])

    function renderNote({ item }) {
        return (
            <View
                style={{
                    padding: 12,
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: "#aaa",
                }}>
                <Text style={{ fontSize:20 }}>{item.title}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                style={{width: '100%'}}
                renderItem={renderNote}
                data={notes}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc',
    }
});