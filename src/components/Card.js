import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ employeeName, presentDays, absentDays }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.employeeName}>John Doe</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.statusText}>Attendance Status</Text>
          <View style={styles.statusContainer}>
            <View style={styles.status}>
              <Text style={styles.statusLabel}>Present:</Text>
              <Text style={styles.statusValue}>18</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.statusLabel}>Absent:</Text>
              <Text style={styles.statusValue}>5</Text>
            </View>
          </View>
        </View>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  header: {
    backgroundColor: '#0047AB',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  employeeName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  statusContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusValue: {
    fontSize: 20,
  },
});
