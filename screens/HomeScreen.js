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
          ok: 'ok',
                nap: 10,
                food: 2400,
                bp: 3600,
                water: 4800,
                pulseox: 6000
      }
      this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    setInterval(this.timer, 1000);
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
                          {text: 'Nap Every 2 Hours', dur: 1200, key: 'nap'},
                          {text: 'Eat Food Every 4 Hours', dur: 2400, key: 'food'},
                          {text: 'Check BP every 6 Hours', dur: 3600, key: 'bp'},
                          {text: 'Drink 8oz Water every 8 Hours', dur: 4800, key: 'water'},
                          {text: 'Check Pulse O2 every 10 Hours', dur: 6000, key: 'pulseox'},
                      ]}
                          renderItem={({item}) => <Button style={styles.button} 
                              onPress={() => { 
                                this.addTime(item.key, item.dur)
                                Alert.alert(item.key + ' timer is now ' + item.dur);
                              }} 
                              title={item.text} />
                          }
                      />
                </View>
                <View>
                    <FlatList 
                        data={[
                          {key: "nap", val: this.state.nap},
                          {key: "food", val: this.state.food},
                          {key: "bp", val: this.state.bp},
                          {key: "water", val: this.state.water},
                          {key: "pulseox", val: this.state.pulseox},
                        ]}
                        renderItem={({item}) => 
                            <Text>{item.key} is set to {item.val}</Text>
                        }
                        >
                    </FlatList>
                </View>
            </View>
        );
    }
 
    addTime = (id, dur) => {  
      this.setState({
          [id]: dur
      })
    }
    timer = () => {
        this.setState({
            nap: this.state.nap - 1,
            food: this.state.food - 1,
            bp: this.state.bp - 1,
            water: this.state.water - 1,
            pulseox: this.state.pulseox - 1,
        })
        // Object.keys(this.state.timers).map(
        //     i => this.setState({ [i]: [i] - 1 })
        //     )
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
