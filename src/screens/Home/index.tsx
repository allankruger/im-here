import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Atendee from "../../components/Atendee";

import { styles } from "./styles";

export default function Home() {
  const atendees = [
    "Allan",
    "Daniele",
    "Krüger",
    "Seghetto",
    "John",
    "Mary",
    "Joseph",
    "Harry",
    "Ron",
    "Lilian",
  ];

  function handleAddAtendee() {
    console.log("You clicked the button");
  }

  function handleRemoveAtendee(name: string) {
    console.log(`You removed ${name} from the list.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, November 4th 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Atendee name"
          placeholderTextColor={"#6b6b6b"}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddAtendee}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={atendees}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Atendee
            key={item}
            name={item}
            onRemove={() => handleRemoveAtendee(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            There are no atendees in the list.
          </Text>
        )}
      />
    </View>
  );
}
