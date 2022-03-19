import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity
} from 'react-native'

export default function App() {

  const [skill, setSkill] = useState("")
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills([...mySkills, skill])
    setSkill("")
  }

  function handleDeleteSkill(skillIndex) {
    const newSkills = mySkills.filter((value, index) => index != skillIndex)
    setMySkills(newSkills)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
          Mbote, Roi Arthur!
      </Text>

      <View>
        <TextInput
          onChangeText={setSkill}
          style={styles.input}
          value={skill} 
          placeholder="New Skill"
          placeholderTextColor="#BBB"  
        />

        <TouchableOpacity 
           onPress={handleAddNewSkill}
          style={styles.button}
          activeOpacity={.6}
        >
          <Text style={styles.buttonText}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.title, {paddingVertical: 50}]}>
        My Skills
      </Text>

      <View>
        {mySkills.map((skill, index) => (
          <TouchableOpacity 
            key={index}
            activeOpacity={.7}
            style={styles.buttonSkill}
          >

            <Text style={[styles.textSkill, {flex: 1.2}]}>
              {skill}
            </Text>
          
            <TouchableOpacity
              onPress={() => handleDeleteSkill(index)}
              activeOpacity={.7}
              style={{flex: 1}}
            >
              <Text style={styles.deleteSkill}>
                DELL
              </Text>
            </TouchableOpacity>

          </TouchableOpacity>
        ))}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#222',
    color: "#BBB",
    padding: 7,
    borderRadius: 5,
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#F8A',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSkill: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    padding: 15,
    borderRadius: 50,
    flexDirection: 'row-reverse',
  },
  textSkill: { 
    color: '#EEE',
    fontWeight: 'bold',
    fontSize: 20,
  },
  deleteSkill: {
    fontWeight: 'bold',
    color: "#F8A"
  }
})

