import React from 'react'
import { View } from 'react-native'
import { Calculator } from 'react-native-calculator'
 
const Cal = () => {
    return (
        <View style={{ flex: 1 , position: 'absolute', left: 20,top: 20, bottom: 20, right: 20, backgroundColor: 'black',}}>
        <Calculator displayTextAlign='center' style={{ flex: 1,backgroundColor: 'orange'  }} />
      </View>
    )
  }
export default Cal;