import React from 'react';
import { Text, View, Image } from 'react-native';

import hospedagem01 from '../../assets/hospedagens/hospedagem01.png';
import hospedagem02 from '../../assets/hospedagens/hospedagem02.png';
import hospedagem03 from '../../assets/hospedagens/hospedagem03.png';

import styles from '../styles';

export default function TelaHospedagem() {
  return (
    <View style={styles.container3}>

      <View style={styles.card}>
          <Text style={styles.titulo}>Pousadas e Hotéis em Paraty</Text>
          <Text style={styles.textos}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
      </View>  

      <View style={styles.cards}> 	
          <Image source={hospedagem01} style={styles.img}/> 
          <Text style={styles.titulos}>Pousada Missanga</Text>
          <Text style={styles.texts}>Valor médio: R$ 350,00</Text> 
          <Text style={styles.texts}>Localização: Próx. à Av. Roberto Silveira</Text>              
      </View> 

      <View style={styles.cards}> 
          <Image source={hospedagem02} style={styles.img}/>
          <Text style={styles.titulos}>Pousada Morro do Forte</Text>
          <Text style={styles.texts}>Valor médio: R$ 450,00</Text> 
          <Text style={styles.texts}>Localização: Próximo à Praia - Pontal</Text>      
      </View>

      <View style={styles.cards}> 
          <Image source={hospedagem03} style={styles.img}/>
          <Text style={styles.titulos}>Pousada Porto Imperial</Text>
	        <Text style={styles.texts}>Valor médio: R$ 550,00</Text> 
	        <Text style={styles.texts}>Localização: Centro Histórico</Text> 
      </View>

    </View>
  );
}