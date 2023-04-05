import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
  function handleAddAtendee() {
    console.log("You clicked the button");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, November 4th 2022</Text>
      <TextInput
        style={styles.input}
        placeholder="Atendee name"
        placeholderTextColor={"#6b6b6b"}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddAtendee}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
