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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                <Text style={{ fontSize: 20, width: "80%" }}>{item.title}</Text>
                <Pressable onPress={() => {
                    setNotes(notes.filter((note) => note.id !== item.id));
                }}>
                    <Entypo name="trash" size={24} color="grey" />      
                </Pressable>
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