import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ContactHR({ navigation }) {
    const [message, setMessage] = React.useState('');

    const handleSend = () => {
        // handle send logic here
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact HR</Text>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Message"
                    multiline={true}
                    numberOfLines={5}
                />
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>Send Message</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    heading: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0047AB',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
