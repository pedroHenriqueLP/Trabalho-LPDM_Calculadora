import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const calculadora = () => {
  const [resultado, setResultado] = useState('');

  const clicar = (valor) => {
    setResultado(resultado + valor);
  };

  const calcular = () => {
    setResultado(eval(resultado).toString());
  };

  const apagar = () => {
    setResultado('');
  };

  return (
    <View style={estilo.container}>

    <Text style={estilo.text}>{resultado}</Text>

    <View style={estilo.container_botoes}>
        <TouchableOpacity style={estilo.botao} onPress={() => clicar('7')}>
          <Text style={estilo.text}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('8')}>
          <Text style={estilo.text}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('9')}>   
          <Text style={estilo.text}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('-')}>   
          <Text style={estilo.text}>-</Text>
        </TouchableOpacity>
    </View>

    <View style={estilo.container_botoes}>
        <TouchableOpacity style={estilo.botao} onPress={() => clicar('4')}>
          <Text style={estilo.text}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('5')}>
          <Text style={estilo.text}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('6')}>   
          <Text style={estilo.text}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('+')}>   
          <Text style={estilo.text}>+</Text>
        </TouchableOpacity>
    </View>

    <View style={estilo.container_botoes}>
        <TouchableOpacity style={estilo.botao} onPress={() => clicar('1')}>
          <Text style={estilo.text}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('2')}>
          <Text style={estilo.text}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('3')}>   
          <Text style={estilo.text}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('*')}>   
          <Text style={estilo.text}>X</Text>
        </TouchableOpacity>
    </View>

    <View style={estilo.container_botoes}>
        <TouchableOpacity style={estilo.botao} onPress={() => clicar('0')}>
          <Text style={estilo.text}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => apagar()}>
          <Text style={estilo.text}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => calcular()}>   
          <Text style={estilo.text}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botao} onPress={() => clicar('/')}>   
          <Text style={estilo.text}>÷</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
    alignItems: 'center',
    backgroundColor: '#1C1D22',
  },

  container_botoes: {
    flexDirection: 'row',
  },

  text: {
    margin: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    backgroundColor: '#686C78',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '1C1D22',
  },

  botao: {
    backgroundColor: 'ffffff',
    borderRadius:25,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

});

export default calculadora;