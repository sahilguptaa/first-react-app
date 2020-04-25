import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goal => {
    if (goal.length === 0) {
      return;
    }
    setGoalsList([...goalsList, { key: Math.random().toString(), val: goal }]);
    setIsAddMode(false);
  };
  const onDelete = key => {
    setGoalsList([...goalsList.filter(goal => goal.key !== key)]);
  };
  const onCancel = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        isAddMode={isAddMode}
        onCancel={onCancel}
      />
      <FlatList
        data={goalsList}
        renderItem={itemData => (
          <GoalItem
            goal={itemData.item.val}
            onDelete={() => onDelete(itemData.item.key)}
          />
        )}
      />
      {/* Scroll View is inefficient for a very long list cz it renders every element in the starting. */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
