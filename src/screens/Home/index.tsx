import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
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
    if (atendees.includes("Allan")) {
      return Alert.alert(
        "Atendee already exists.",
        "There is an atendee registered with this name already."
      );
    }
  }

  function handleRemoveAtendee(name: string) {
    return Alert.alert(
      "Remove",
      `Are you sure that you want to remove ${name}?`,
      [
        {
          text: "Yes",
          onPress: () => Alert.alert("Deleted successfully."),
        },
        {
          text: "No",
          style: "cancel",
        },
      ]
    );
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
