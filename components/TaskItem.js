import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemDescription}>{props.text}</Text>
      </View>
      <View style={styles.itemRight}>
        <View style={styles.circleLeft}></View>
        <View style={styles.circleRight}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    item:{
        borderRadius: 10,
        backgroundColor: '#fa0',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 10,
        marginTop: 10,
    },

    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        marginRight: 15,
    },

    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        },

    circleLeft: {
        backgroundColor: '#fff',
        width: 16,
        height: 16,
        borderColor: '#f00',
        borderRadius: 8,
        borderWidth: 2.0,
        marginHorizontal: 5,
    },

    circleRight: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2.0,
        borderColor: '#8f6',
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },

    itemDescription: {
        color:'#000',
        maxWidth: '80%',
        fontSize: 18,
    },
});

export default TaskItem;
