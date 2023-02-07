import React,{ Component } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {notaUm: 0, notaDois: 0, faltas:0, resultado:""}
    this.calcular = this.calcular.bind(this)
  }
  
  calcular(){
    let notaNumeroUm = parseFloat(this.state.notaUm)
    let notaNumeroDois = parseFloat(this.state.notaDois)
    let media = (notaNumeroUm+notaNumeroDois)/2

    if(media >= 6 && this.state.faltas <= 10){
      this.setState({resultado: "Aluno foi APROVADO"})
    }else{
      this.setState({resultado: "Aluno foi REPROVADO"})
    }
  }
  
  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          onChangeText ={(notaUm) => {this.setState({notaUm})}} 
          keyboardType="numeric"
          placeholder="Nota 1"
        />

        <TextInput 
          style={styles.textInput}
          onChangeText ={(notaDois) => {this.setState({notaDois})}}
          keyboardType="numeric"
          placeholder="Nota 2"
        />

        <TextInput 
          style={styles.textInput}
          onChangeText={(faltas) => {this.setState({faltas})}}
          keyboardType="numeric"
          placeholder="Número de faltas"
        />

        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.textResultado}>{this.state.resultado}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#567890',
  },
  textInput:{
    padding: 30,
    backgroundColor: '#CCCCCC',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    fontSize: 20
  },
  button:{
    margin:20,
    padding:20,
    backgroundColor:'#37474f'
  },
  textButton:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold',
    fontFamily:'monospace',
    alignSelf:'center' // vai centralizar meu elemento com o elemento pai
  },
  textResultado:{
    color:'#FFF',
    fontSize:22,
    fontWeight:'bold',
    alignSelf:'center'
  }
});
