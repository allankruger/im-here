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
import { useState } from "react";

export default function Home() {
  const [atendees, setAtendees] = useState<string[]>([]);
  const [atendeeName, setAtendeeName] = useState("");

  function handleAddAtendee() {
    if (atendees.includes(atendeeName)) {
      return Alert.alert(
        "Atendee already exists.",
        "There is an atendee registered with this name already."
      );
    }

    setAtendees((prevState) => [...prevState, atendeeName]);
    setAtendeeName("");
  }

  function handleRemoveAtendee(name: string) {
    Alert.alert("Remove", `Are you sure that you want to remove ${name}?`, [
      {
        text: "Yes",
        onPress: () => (
          setAtendees((prevState) =>
            prevState.filter((atendee) => atendee != name)
          ),
          Alert.alert("Success", `${name} was successfully removed.`)
        ),
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
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
          onChangeText={(text) => setAtendeeName(text)}
          value={atendeeName}
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
