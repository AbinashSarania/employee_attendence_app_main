import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Navbar from '../components/Navbar';
import AttendanceSwitch from '../components/AttendanceSwitch';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Navbar title="Home" />
            <View style={styles.content}>
                <Card />
                <Text style={styles.instruction}>Click the button below to record you attendence.</Text>
                <AttendanceSwitch />
                <View style={styles.buttonsContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => navigation.navigate('ContactHR')}>
                        <Text style={styles.buttonText}>Contact HR</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => navigation.navigate('ViewHolidays')}>
                        <Text style={styles.buttonText}>View Holidays</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    instruction: {
        marginTop: 80,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        marginBottom: 40,
    },
    buttonsContainer: {
        flexDirection: 'column',
        width: '90%',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#0047AB',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});
