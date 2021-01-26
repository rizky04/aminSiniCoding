import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import FormLogin from "./components/FormLogin.js";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View >
        {/* strat */}
                <View style={{marginTop: 40, alignItems: "center", justifyContent: "center" }}>
                  <Image style={{ width: 200, height: 100 }} source={require("./src/assets/img/logo.png")}></Image>
                  <Text style={styles.text}>
                  MOV APP MOVIE
                </Text>
        </View>
        {/* start logo fb google */}
      <View style={{ marginTop: 48, flexDirection: "row", justifyContent:"center"}}>
        <TouchableOpacity>
                <View style={styles.sosmedButton}>
                  <Image style={styles.sosmedLogo} source={require("./src/assets/img/fb.png")}></Image>
                  <Text style={styles.text}>
                      Facebook
                  </Text>
                </View>
        </TouchableOpacity>
        <TouchableOpacity>
              <View style={styles.sosmedButton}>
                <Image style={styles.sosmedLogo} source={require("./src/assets/img/google.png")}></Image>
                <Text style={styles.text}>
                  Google
                </Text>
              </View>
          </TouchableOpacity>
        </View>
         {/* start logo fb google */}
        {/* end */}
              <Text style={[styles.text, {color: "#6C6CE5", fontSize: 15, textAlign: "center" , marginVertical: 20}]}>
          or
                </Text>



        {/* form email */}
        <FormLogin title="email"></FormLogin>


        <FormLogin title="password" isSecure={true} style={{marginTop: 32, marginBottom: 8}}></FormLogin>
        {/* form password */}



        <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
          Forgot password
        </Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.text, {color: "#fff", fontWeight: "600", fontSize: 16}}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.text, { fontSize: 14, color: "#6C6CE5", textAlign: "center", marginTop: 10, marginBottom: 20}]}>
          Don't have an account? <Text style={[styles.text, styles.link]}>Register Now</Text>
        </Text>
       </View>
    </ScrollView>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A37",
    paddingHorizontal: 30
  },
  text: {
    fontFamily: "Poppins",
    color: "#fff"
  },
  sosmedButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#29295E",
    borderRadius: 4,
    backgroundColor: "#FF004C",
    shadowColor: "#6C6CE5",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5

  },
  sosmedLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: "#FF004C",
    fontSize: 14,
    fontWeight: "500"
  },
  loginButton: {
    backgroundColor: "#FF004C",
    fontSize: 16,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#6C6CE5",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20
  }
});