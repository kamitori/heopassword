import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <Card flexDirection='row'>
        <View style={{flex: 1}}>
          <Image            
          style={{ width: 60, height: 60 }}            
          source={{uri: './img/icon_home.png'}}>
          </Image>
        </View>
        <View style={{flex: 3, flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            This is my Title
          </Text>
          <Text style={{fontSize: 12}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
