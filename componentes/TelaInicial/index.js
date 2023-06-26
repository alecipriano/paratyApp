import React from 'react';
import { Text, View, Image, Button  } from 'react-native';

import inicio from '../../assets/inicio/inicio.png';
import styles from '../styles';

export default function TelaInicial(props) {
  return (
    <View style={styles.container}>

        <View style={styles.card}>

          <Text style={styles.titulo}>Paraty</Text>
          <Text style={styles.textos}>Saiba o que visitar em Paraty.</Text>
          <Image source={inicio} style={styles.imagem}/> 

          <View style={styles.boxBotoes}>

            <View style={styles.botao}>
                <Button 
                title="Ver Restaurantes" 
                onPress={() => props.navigation.navigate("Restaurantes")} color="#372d00" 
                />
            </View>

            <View style={styles.botao}>
                <Button 
                title="Ver Passeios" 
                onPress={() => props.navigation.navigate("Passeios")} color="#372d00" 
                />
            </View>

            <View style={styles.botao}>
                <Button 
                title="Ver Hospedagem" 
                onPress={() => props.navigation.navigate("Hospedagem")} color="#372d00" 
                />
            </View>        

          </View>
    
        </View>

    </View>
  );
}