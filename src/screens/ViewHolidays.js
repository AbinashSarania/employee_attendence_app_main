import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default function ViewHolidays() {
    const [selectedStartDate, setSelectedStartDate] = React.useState(null);
    const [selectedEndDate, setSelectedEndDate] = React.useState(null);

    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedStartDate(date);
            setSelectedEndDate(null);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>View Holidays</Text>
            <View style={styles.calendarContainer}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    selectedStartDate={selectedStartDate}
                    selectedEndDate={selectedEndDate}
                    onDateChange={onDateChange}
                    weekdays={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                    months={[
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                />
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        marginBottom: 20,
    },
    calendarContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
        marginHorizontal: 16,
    },
});
