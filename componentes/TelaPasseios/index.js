import React from 'react';
import { Text, View, Image } from 'react-native';

import passeio01 from '../../assets/passeios/passeio01.png';
import passeio02 from '../../assets/passeios/passeio02.png';
import passeio03 from '../../assets/passeios/passeio03.png';

import styles from '../styles';

export default function TelaPasseios() {
  return (
    <View style={styles.container2}>

    <View style={styles.card}>
      
      <Text style={styles.titulo}>Passeios em Paraty</Text>
      <Text style={styles.textos}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:</Text>

    </View>  

    <View style={styles.cards}> 
        <Text style={styles.titulos}>Tirolesa</Text>
        <Image source={passeio01} style={styles.img}/>            
    </View> 

    <View style={styles.cards}> 
        <Text style={styles.titulos}>Rafting</Text>
        <Image source={passeio02} style={styles.img}/>     
    </View>

    <View style={styles.cards}> 
        <Text style={styles.titulos}>Canoagem no mangue</Text>
        <Image source={passeio03} style={styles.img}/> 
    </View>

  </View> 
  );
}