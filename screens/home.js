import React, {useState} from 'react';
import {  Button, ScrollView ,Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet , Text, TextInput, TouchableOpacity, View } from 'react-native';
import Notes from '../components/Notes'
import { Calculator } from 'react-native-calculator'
import Loctn from '../components/loctn.js'
import Bot from './Bot'
import { NavigationContainer } from '@react-navigation/native';
import Navi from '../routes/homeStack';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";


export default function Home() {
  const [note, setNote] = useState('');
  const [notesItems, setNotesItems] = useState([]);
  const [getDetails, setGetDetails] = useState([{"facts": " "}]);
 


const getFact = () => {


  const options = {
    method: 'GET',
    url: 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts',
    params: {limit: '1'},
    headers: {
      'x-rapidapi-host': 'facts-by-api-ninjas.p.rapidapi.com',
      'x-rapidapi-key': '849e433829msh87373f4a458fad6p128c8ajsn1bb62c26553f'
    }
  };
  
  axios.request(options).then(function (response) {
    setGetDetails(response.data)
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}
const submitData = () => {
    console.log(note)
      if(typeof(note)!= 'undefined'){
       console.log('.....')
    fetch('http://192.168.31.42:3000/send-data',{ //using the address as 192.168.31.42 because it is the ipv4 address of the desktop
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
        
      },
      body:JSON.stringify({
        'note' : note
      }
      )
      
    }).then(res => res.json())
    .then(data=>{
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
     }
    }
  
  const navigation = useNavigation()
  
  //   
   const dataBa = () => {
    submitData(); 
    handleAddNotes();

   }
  

  const  checkNote = () => {
    if(note === ' '){
      alert('ALERT')
    }
    else{
      handleAddNotes()
    }
  }
  

  const handleAddNotes = () => {
    if(note === ' '){
      alert('ALERT')
      return;
    }
    Keyboard.dismiss()   //dismiss the keyboard after adding a note
    setNotesItems([...notesItems, note])
    setNote(null)
    console.log('added')
  }
  const completeTask = (index) => {
    let notesCopy = [...notesItems];

    notesCopy.splice(index, 1);
    setNotesItems(notesCopy);
  }
  
  return (
    
    <View style={styles.container}>
     <ScrollView >
       
      
      <View style = {styles.notesWrapper}>
    
       <View style = {styles.items}>
        {
          notesItems.map((note, index) => {
           return( 
           <TouchableOpacity key = {index} onPress = {()=> {completeTask(index)}}>
            <Notes  text = {note} />
            </TouchableOpacity>
           )
          })
        }
          
       </View>

      </View>
      </ScrollView>
      <TouchableOpacity 
         onPress={() =>{navigation.navigate('Bot')}}           
         
        style = {styles.botWrap}>
      <Text style = {styles.butn}>?</Text>
      </TouchableOpacity >
      
       <KeyboardAvoidingView
       behavior = {Platform.OS === "android"? "padding": "height"}
       style = {styles.writeNotesWrapper}>
        <TextInput  style = {styles.input} placeholder = {'New note'} 
           onChangeText = {text => setNote(text)} value = {note}
        onSubmitEditing = {()=>{dataBa()}}></TextInput>
      

         <TouchableOpacity  onPress = {()=> {dataBa()}}>

          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
         </TouchableOpacity>
       </KeyboardAvoidingView>

      
        
        <TouchableOpacity placeholder = 'facts' onPress = {() => getFact()} ><Text style = {styles.tocht}>{getDetails[0].facts}</Text></TouchableOpacity>
     
     
        <Loctn />
    </View>
    
       
    
  );
}

const styles = StyleSheet.create({
  
  container: {
     flex: 1,
    backgroundColor: 'white',
  },
  
  notesWrapper: {
     paddingTop: 100,
     paddingHorizontal: 20,
     alignItems: 'center',
     backgroundColor: 'white',
     marginTop: 30,
     alignItems: 'center',
     flex:1,
    // position:'absolute',
    // top:20,
    
  },
  tocht: {
     fontSize: 25,
     fontWeight: 'bold',
     backgroundColor: 'orange',
     bottom: 20,
     alignItems: 'center',
     
     
     
  },
  botWrap:{
     position: 'absolute',
     left: '80%',
     bottom: 100,
     width: 60,
     height: 60,
     backgroundColor: 'orange',
     borderRadius: 60,
     justifyContent: 'center',
     alignItems: 'center',

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    // backgroundColor: 'black'
  },
  butn:{
    
     fontSize: 20,
     fontWeight: 'bold'

  },
  items: {
    marginTop: 30,
    backgroundColor: 'white'

  },
  writeNotesWrapper: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'white',
    marginTop: 50

  

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'orange',
    borderRadius: 60,
    borderColor: 'blue',
    borderWidth: 1,
    width: 250,
    fontWeight: 'bold',
    fontSize: 20,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'orange',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});
