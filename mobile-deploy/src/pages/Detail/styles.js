import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight+28
  },  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },
  incident:{
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8
  },
  innergroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hero:{
    backgroundColor: 'white',
    marginTop: 16,
    padding: 24,
    borderRadius: 8
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button:{
    backgroundColor: '#E02041',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    width: '48%',
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  title:{
    fontSize: 20,
    color: '#13131a',
    fontWeight: 'bold',
    lineHeight: 30
  },
  subtitle:{
    lineHeight: 30,
    marginBottom: 16
  }
})