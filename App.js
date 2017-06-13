import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,StatusBar} from 'react-native';

export default class App extends React.Component {
  state={
    count:0
  }
onPlus = ()=>{
  this.setState({
    count: this.state.count+1
  })
}
onMinus =()=>{
  this.setState({
    count:this.state.count-1
  })
}

  render() {
    const {container,textContainer,textStyle,buttonsContainer,buttonStyle,buttonText}= styles
    return (
      <View style={container}>
        <View style={textContainer}>
          <Text style={textStyle}>{this.state.count}</Text>
        </View>
        <View style={buttonsContainer}>
          <TouchableOpacity style={buttonStyle} onPress={this.onMinus} >
            <Text style={buttonText} >-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle} onPress={this.onPlus} >
            <Text style={buttonText}  >+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131',
    alignItems: 'center',
    justifyContent: 'center',
    width:null
  },
  textContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle:{
    color:'white',
    fontSize:150,
    
  },
  buttonsContainer:{
   
   
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    
    alignSelf:'stretch'
  },
  buttonStyle:{
    width:120,
    height:120,
    backgroundColor:'white',   
    borderRadius:5,
    shadowColor:'#000',
    shadowRadius:5,
    shadowOffset:{width:2,height:2},
    shadowOpacity:.8,
    alignItems:'center',
    justifyContent:'center',


  },
  buttonText:{
    color:'#313131',
    fontSize:75
  }
});
