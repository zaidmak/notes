// import React from "react";
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, View, Text } from "react-native";


const Bot = () => {

  const [messages, setMessages] = useState([]);
  let count = useRef(1)
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          
        },
      },
    ])
  }, [])

  if(count.current===messages.length){
    const ma2 = {
      _id: count.current+1,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        
      }
    }
    
  
    count.current = count.current+1;
    let txt = 'hi'
  
  
      if(messages[0].text==='hi'){
        txt = 'how can i be of your assistance'
        setMessages([{...ma2, text:txt}, ...messages])
      }
      else if(messages[0].text==='about'){
        txt = 'this  is an app that will help you add notes and these notes willl be saved in your database'
        setMessages([{...ma2, text:txt}, ...messages])
      }
      
      
  }

  

  

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Bot;