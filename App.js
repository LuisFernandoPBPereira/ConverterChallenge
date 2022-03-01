//=======================================Importações==================================================

import { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

//===================================================================================================

export default function App() {

  //=================================Quilômetro para Metro===========================================
  const [kilometer, setkilometer] = useState(0)
  let meter

  function calculateKilometer() {
    meter = kilometer * 1000
    Alert.alert("Conversor", `${kilometer}KM equivalem a ${meter}M`)    
    console.log(meter)
  }

  //===================================================================================================

  //======================================KM/H para M/H================================================

  const [kmh, setKMH] = useState(0)
  let miles
  
  function calculateKMH() {
    miles = kmh / 1.609
    Alert.alert("Conversor", `${kmh}KM/H equivalem a ${miles} milhas`)
    console.log(miles)
  }

  //===================================================================================================

  //=======================================Real para Dólar=============================================

  const [dollar, setDollar] = useState(0)
  const [reais, setReais] = useState(0)
  
  let calculo
  function  calculateDollar() {
    calculo = reais / dollar
    Alert.alert("Conversor", `R$${reais} equivalem a $${calculo}`)
    console.log(calculo)
  }
  //===================================================================================================
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Aplicativo Conversor </Text>

      <Text style={styles.title}>Km para Milhas</Text>
      <TextInput 
      style={styles.conversor}
      placeholder= "Valor em Quilômetros"
      keyboardType= "numeric"
      onChangeText={(kilometer) => setkilometer(kilometer)}
      />

      <TouchableOpacity onPress={calculateKilometer}>
        <Text style={styles.buttonCalculate}>Calcular</Text>
      </TouchableOpacity>

      {/* ======================================================================================== */}

      <Text style={styles.title}>KM/H para Milhas/H</Text>
      <TextInput 
      style={styles.conversor}
      placeholder= "Valor em KM/H"
      keyboardType= "numeric"
      onChangeText={(kmh) => setKMH(kmh)}
      />

      <TouchableOpacity onPress={calculateKMH}>
        <Text style={styles.buttonCalculate}>Calcular</Text>
      </TouchableOpacity>

      {/* ========================================================================================= */}

      <Text style={styles.title}>Reais para Dólar</Text>
      
      <Text>Reais</Text>
      <TextInput 
      style={styles.conversor}
      placeholder= "Valor em Reais"
      keyboardType= "numeric"
      onChangeText={(reais) => setReais(reais)}
      />

      <Text>Dólar</Text>
      <TextInput 
      style={styles.conversor}
      placeholder= "Valor do Dólar"
      keyboardType= "numeric"
      onChangeText={(dollar) => setDollar(dollar)}
      />

      <TouchableOpacity onPress={calculateDollar}>
        <Text style={styles.buttonCalculate}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}


//Declarando estilizações
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
    fontSize: 22,
    color: "#000",
    fontWeight:500
  },
  conversor:{
    backgroundColor: "#FFF",
    color: "#000",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    textAlign: "center"
  },
  buttonCalculate:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E90FF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
