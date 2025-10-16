import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    margin: "2%",
    alignItems: "center",
    borderColor: "#000",
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "#5d5c5f"

  },


  image: {

    marginTop:20,
    width: 100,
    height: 100,
    borderColor: "#000",
    borderWidth: 3, 
    borderRadius: 200

  },

  text: {
    
    fontSize: 30,
    color: "white",
    fontWeight: "bold"


  }
})
export default function Index() {
  return (
    <View>
    <View style={styles.card}>
      <Image style={styles.image} source={{uri:"https://media.tenor.com/cO1cM7re22MAAAAM/sherma-silksong.gif"}}></Image>
      <Text style={styles.text}>Sherma</Text>
    </View>

    <View style={styles.card}>
      <Image style={styles.image} source={{uri:"https://media.tenor.com/cO1cM7re22MAAAAM/sherma-silksong.gif"}}></Image>
      <Text style={styles.text}>Sherma</Text>
    </View>
    </View>
  );
  }

