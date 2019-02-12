import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
      super(props);
      this.state = { 
          nap: 10,
          food: 240,
          bp: 360,
          water: 480,
          pulseox: 600
      }
  }

    render() {
        return (
            <View style={styles.main}>
                <View > 
                    <Text style={styles.headerSmall}>Gastric Bypass Surgery</Text>
                    <Text style={styles.headerLarge}>Tracker App</Text>
                </View>
                <View >
                    <Text>Here are the things you need to do:</Text>
                      <FlatList 
                      data={[
                          {text: 'Nap Every 2 Hours', dur: 120, key: 'nap'},
                          {text: 'Eat Food Every 4 Hours', dur: 240, key: 'food'},
                          {text: 'Check BP every 6 Hours', dur: 360, key: 'bp'},
                          {text: 'Drink 8oz Water every 8 Hours', dur: 480, key: 'water'},
                          {text: 'Check Pulse O2 every 10 Hours', dur: 600, key: 'pulseox'},
                      ]}
                          renderItem={({item}) => <Button style={styles.button} 
                              onPress={() => { 
                                this.AddTime(item.key, item.dur)
                                Alert.alert(item.key + ' timer is now ' + this.state[item.id]);
                              }} 
                              title={item.key} />
                          }
                      />
                </View>
                <View>
                    <FlatList 
                        data={[
                          {key: this.state.nap},
                          {key: this.state.food},
                          {key: this.state.bp},
                          {key: this.state.water},
                          {key: this.state.pulseox},
                        ]}
                        renderItem={({item}) => 
                            <Text>{item.key} is set to {this.state[item.key]}</Text>
                        }
                        >
                    </FlatList>
                </View>
            </View>
        );
    }
    AddTime = (id, dur) => {  
      this.setState({
          [id]: dur
      })
    }
}

const styles = StyleSheet.create({
    headerSmall: {
        fontSize: 14,
        paddingTop: 30,
    },
    headerLarge: {
        fontSize: 22
    },
    button: {
        padding: 15,
        margin: 15
    }
});
