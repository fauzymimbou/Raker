

import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.kotak}>
          <Text style={styles.teks1}> JADWAL RANCANGAN KERJA  </Text>
          <Text style={styles.teks1}> IPNU IPPNU GULUK-GULUK </Text>
        </View>
        <View style={styles.panji}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:22}}>Januari</Text>
         <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
            
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPNU"
          />
        <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPPNU"
          />
        </View>

        <View style={styles.panji}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:22}}>Februari</Text>
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
        
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPNU"
          />
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
           
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPPNU"
          />
        </View> 

        <View style={styles.panji}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:22}}>Maret</Text>
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
        
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPNU"
          />
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
           
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPPNU"
          />
        </View> 

        <View style={styles.panji}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:22}}>April</Text>
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
        
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPNU"
          />
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
           
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPPNU"
          />
        </View> 
          
        <View style={styles.panji}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:22}}>Mei</Text>
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
        
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPNU"
          />
          <TextInput
          style={{
            height: 40,
            borderColor: 'green',
            borderWidth: 1,
            paddingLeft: 20,
            marginVertical: 2,
            borderRadius: 4,
           
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="RAKER IPPNU"
          />
        </View> 

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  kotak:{
    borderWidth: 0,
    padding: 12,
    backgroundColor: "green"
    
  },
  panji:{
    borderWidth: 1,
    padding: 10,
    borderColor: 'green',
    backgroundColor: 'yellow',
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    elevation: 5,

  },
  olar:{
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },
  teks1:{
    textAlign: 'center',
    color: '#fff000'
  }
})
