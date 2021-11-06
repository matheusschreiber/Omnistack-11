import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import logo from '../../assets/logo.png'
import styles from './styles.js'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import {Feather} from '@expo/vector-icons'


export default function Detail(){
  const navigation = useNavigation()
  const route = useRoute()
  const incident = route.params.incident
  
  const message = `Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}`
  

  function goBack(){
    navigation.goBack()
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Heróis do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?text=${message}&phone=${incident.whatsapp}`)
  }
  
  return (
      <View style={styles.container}>
         <View style={styles.header}>
          <Image source={logo}/>
          <TouchableOpacity onPress={goBack}>
            <Feather name="arrow-left" size={26} color="#E02041"/>
          </TouchableOpacity>
        </View>
        
        <View style={styles.incident}>
          <View style={styles.innergroup}>
            <View>
              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>
            </View>
            <View>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name} de {incident.city} - {incident.uf}</Text>
            </View>
          </View>
          <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
          <Text style={styles.incidentValue}>{incident.description}</Text>
          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>
                {Intl.NumberFormat(
                  'pt-BR', {
                    style: 'currency',
                    currency: 'BRL' 
                  }).format(incident.value)}
              </Text>
        </View>
        <View style={styles.hero}>
          <Text style={styles.title}>Salve o dia!</Text>
          <Text style={styles.title}>Seja o herói desse caso.</Text>
          <Text style={styles.subtitle}>Entre em contato</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={sendWhatsapp}>
              <Text style={styles.buttonText}>Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={sendMail}>
              <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>
          </View>
          
        </View>

      </View>
  );
}