import React, {useState} from 'react';
import { StyleSheet, Text, Button, View, TouchableHighlight } from 'react-native';
import * as Location from "expo-location";

const Loctn = ()  => {

  
  const [location, setLocation] = useState(null);
  const [disAddress, setDisAddress] = useState(null);
  const [code, setCode] = useState('');
  const [det, setDet] = useState([]);

  

  const getLocation = async() => {

    let {status} = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);

    let lat=loc.coords.latitude;
    let long = loc.coords.longitude;

    

    if(loc)
    {
      let res = await Location.reverseGeocodeAsync(
        {
          latitude: lat,
          longitude: long
        }
      )

      for (let item of res){
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        let cCode = `${item.isoCountryCode}`
        setCode(cCode);
        setDisAddress(address);
        console.log(address);
      }
    };       
  }
    

  return(
      <View style>
          <View  style = {styles.Button}>
              <Button 
                  title='GET LOCATION'
                  onPress={getLocation}
                 
              />
          </View>
          <View>
            <Text>{disAddress}</Text>
              
          </View>
        
      </View>
  )
};

const styles = StyleSheet.create({
  Button:{
    bottom: 10
  }
})

export default Loctn;