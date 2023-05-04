import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function EditProfile({ navigation }) {
    const [name, setName] = React.useState('John Doe');
    const [email, setEmail] = React.useState('johndoe@example.com');
    const [phone, setPhone] = React.useState('123-456-7890');

    const handleSave = () => {
        // handle save logic here
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
             <Text style={styles.heading}>Edit Profile</Text>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Phone"
                />
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save Changes</Text>
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
        height: 50,
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
