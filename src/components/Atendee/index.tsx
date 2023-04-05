import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Atendee() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Atendee</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
