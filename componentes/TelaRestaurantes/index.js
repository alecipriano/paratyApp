import React from 'react';
import { Text, View, Image } from 'react-native';

import restaurante01 from '../../assets/restaurantes/restaurante01.png';
import restaurante02 from '../../assets/restaurantes/restaurante02.png';
import restaurante03 from '../../assets/restaurantes/restaurante03.png';

import styles from '../styles';

export default function TelaRestaurante() {
  return (
    <View style={styles.container1}>

      <View style={styles.card}>
        
        <Text style={styles.titulo}>Bares e Restaurantes</Text>
        <Text style={styles.textos}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>

      </View>  

      <View style={styles.cards}> 
        <Image source={restaurante01} style={styles.img}/> 
        <Text style={styles.titulos}>Armazén Mar</Text>
        <Text style={styles.texts}>Localização: Rod Rio-Santos</Text>          
      </View> 

      <View style={styles.cards}> 
        <Image source={restaurante02} style={styles.img}/>
        <Text style={styles.titulos}>Bendita's Restaurante</Text>
        <Text style={styles.texts}>Localização: Centro Histórico</Text>        
      </View>

      <View style={styles.cards}> 
        <Image source={restaurante03} style={styles.img}/>
        <Text style={styles.titulos}>Sereia do Mar PIZZA-BAR</Text>
        <Text style={styles.texts}>Localização: Praia do Jabaquara</Text>   
      </View>

    </View>
  );
}