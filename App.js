import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const [allGoals, setAllGoals] = useState([])
  const onInputChange = (enteredText) => {
    if(enteredText.trim() !== ''){
      console.log("first")
    setEnteredGoalText(enteredText)
  }
    else{
      console.log("error")
    }
  }
  const onButtonPressed = () => {
    
    setAllGoals((goals) => [...goals, enteredGoalText])

  }

  return (
    <View style={styles.addContainer}>
      <View style={styles.inputcontianer}>
        <TextInput style={styles.textInput} placeholder='Your Goal' onChangeText={onInputChange} />
        <Button title='Add Goal' onPress={onButtonPressed} />
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView >
        <Text>List of goals... </Text>
        {allGoals.map((data) =>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{data}</Text>
          </View>)}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputcontianer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText:{
    color:'white'
  }
});
