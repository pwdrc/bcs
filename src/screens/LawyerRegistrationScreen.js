import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LawyerRegistrationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.segment}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}></View>
          </View>
          <Text style={styles.labelText}>Label 1</Text>
        </View>
        <View style={styles.segment}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}></View>
          </View>
          <Text style={styles.labelText}>Label 2</Text>
        </View>
        <View style={styles.segment}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}></View>
          </View>
          <Text style={styles.labelText}>Label 3</Text>
        </View>
        <View style={styles.segment}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}></View>
          </View>
          <Text style={styles.labelText}>Label 4</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 8,
    gap: 8,
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    backgroundColor: '#D0BCFF',
    borderRadius: 8,
  },
  segment: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 4,
    width: 118,
    height: 80,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8DEF8',
  },
  icon: {
    width: 24,
    height: 24,
    backgroundColor: '#4F378B',
  },
  labelText: {
    width: 118,
    height: 16,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#4F378B',
  },
});

export default LawyerRegistrationScreen;
