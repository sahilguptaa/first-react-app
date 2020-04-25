import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, isAddMode, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHnadler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const emptyInputBoxHandler = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  const emptyInputBoxHandlerOnCancel = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={isAddMode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal.."
          style={styles.inputBox}
          value={enteredGoal}
          onChangeText={goalInputHnadler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={emptyInputBoxHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              onPress={emptyInputBoxHandlerOnCancel}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  inputBox: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: "70%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
