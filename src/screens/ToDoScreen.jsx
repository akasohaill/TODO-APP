import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

const ToDoScreen = () => {
  const [taskList, setTaskList] = useState([]);

  // Function to get the current date and time in a readable format
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  };

  // Function to save the tasks to AsyncStorage
  const saveTasksToStorage = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error('Error saving tasks to AsyncStorage', e);
    }
  };

  // Function to load tasks from AsyncStorage when the app loads
  const loadTasksFromStorage = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTaskList(JSON.parse(storedTasks));
      }
    } catch (e) {
      console.error('Error loading tasks from AsyncStorage', e);
    }
  };

  // Load tasks when the app starts
  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  const addTask = (task) => {
    const newTasks = [
      ...taskList,
      { id: Date.now().toString(), task, dateTime: getCurrentDateTime() },
    ];
    setTaskList(newTasks);
    saveTasksToStorage(newTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = taskList.filter((item) => item.id !== id);
    setTaskList(updatedTasks);
    saveTasksToStorage(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Manage Your Daily Task</Text>
      <TaskInput onAddTask={addTask} />
      {taskList.length > 0 ? (
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item.task}
              id={item.id}
              dateTime={item.dateTime}
              onDeleteTask={deleteTask}
            />
          )}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <View style={styles.noTask}>
            <Image style={styles.image} source={require('../../assets/gif.gif')}/>
            <Text style={styles.noTaskText}>No Tasks Added Yet</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  noTask: {
    display: 'flex',
    alignItems: 'center',
    margin: 30,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  noTaskText: {
    textAlign: 'center',
    fontSize: 26,
    color: 'white',
    fontWeight: '500',
  },
  flatListContent: {
    paddingBottom: 20, 
  },
});

export default ToDoScreen;
