import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, id, onDeleteTask, dateTime }) => {
  return (
    <View style={{
      marginBottom:20,
    }}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{task}</Text>
        <TouchableOpacity onPress={() => onDeleteTask(id)}>
          <Text style={styles.deleteButton}>DONE</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.time}>{dateTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 14,
    // backgroundColor:'whitesmoke',
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 10
  },
  time:{
    fontSize:17,
    fontWeight:'500',
    textAlign:'right',
    color:'D3D3D3'
  }
});

export default TaskItem;
