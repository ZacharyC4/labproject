import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

export default function App() {
    const [tasks, setTasks] = useState([
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]);

    const addTask = (task) => {
      setTasks([...tasks, task]);
    }

      
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          < ToDoList tasks = {tasks} />
          < ToDoForm addTask={addTask}/>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
  });
  