import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>Aplikasi absensi</Text>
      <Text style={styles.textContainer}>semua data yang dibutuhka buat absensi</Text>

      <View>
        <TouchableOpacity 
        onPress={() => {
          router.push("/masuk")
        }}
        style={styles.buttom}>
          <Text style={styles.textButtom}>Absen Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
          router.push("/keluar")
        }}
        style={styles.buttom}>
          <Text style={styles.textButtom}>Absen keluar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default menu

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  textContainer:{
    fontSize:20,
    fontWeight:"700",
    textAlign:"center",
    color:"#FFFFFF"
  },
  buttom:{
    height:100,
    width:300,
    borderRadius:10,
    borderWidth:1,
    marginHorizontal:"auto",
    marginTop:40,
    justifyContent:"center"
  },
  textButtom:{
    color:"gray",
    fontSize:20,
    marginLeft:10
  }
})