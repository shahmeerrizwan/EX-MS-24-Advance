import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
// import { useState } from "react";
import styles from "../../Css/style";
// import Form from "../Components/Form";


export default function HomeScreen() {

// // const [name, setName] = useState("Signup");
//   // const [inpValue, setInpValue] = useState<string>("");

//   const users = [
//     {
//       name: "Shahmeer",
//       age: 19,
//     },
//     {
//       name: "Abdullah",
//       age: 20,
//     },
//     {
//       name: "Talha",
//       age: 21,
//     },
//     {
//       name: "Adnan",
//       age: 22,
//     },
//     {
//       name: "Shahmeer",
//       age: 19,
//     },
//     {
//       name: "Abdullah",
//       age: 20,
//     },
//     {
//       name: "Talha",
//       age: 21,
//     },
//     {
//       name: "Adnan",
//       age: 22,
//     },
//     {
//       name: "Abdullah",
//       age: 20,
//     },
//     {
//       name: "Talha",
//       age: 21,
//     },
//     {
//       name: "Adnan",
//       age: 22,
//     },
//   ];



  const name = "Muhammad Shah";
  let age = 19;
  var fName = "Rizwan Ahmed";

  function myFunc() {
    return "My First App";
  }

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Components</Text>

    //   <TouchableOpacity style={styles.button} onPress={() => setName("Login")}>
    //     <Text style={styles.buttonText}>{name}</Text>
    //   </TouchableOpacity>

    //   <Text style={styles.inlineTitle}>Inline Style</Text>
    //   <Text style={styles.addStyle}>Internal Style</Text>
    //   <Text style={styles.Externalstyle}>External Style</Text>

    //   <Text style={styles.nameText}>Your Name Is: {inpValue}</Text>
    //   <TextInput
    //     style={styles.inpStyle}
    //     value={inpValue}
    //     placeholder="Enter Your Name"
    //     onChangeText={(text) => setInpValue(text)}
    //   />
    //   <TouchableOpacity
    //     style={styles.clearButton}
    //     onPress={() => setInpValue("")}
    //   >
    //     <Text style={styles.buttonText}>Clear Input</Text>
    //   </TouchableOpacity>

    //   <Form/>
    // </View>

    // <View>
    //   <Text style={styles.listText}>FLAT LIST </Text>
    //   <FlatList
    //     data={users}
    //     renderItem={({ item }) => <Text style={styles.list}>{item.name}</Text>}
    //   />
    // </View>

    // <View>
    //   <Text style={styles.listText}>CUSTOM LIST </Text>
    //   <ScrollView>
    //     {users.map((item, id) => (
    //       <Text key={id} style={styles.list}>
    //         {item.name}
    //       </Text>
    //     ))}
    //   </ScrollView>
    // </View>

    <View>
      <Text style={{ fontSize: 30, top: 60 }}>My First Android App</Text>
      <Text style={{ fontSize: 25, top: 60 }}>MUHAMMAD SHAHMEER RIZWAN</Text>
      <Text style={{ fontSize: 25, top: 60 }}>{name}</Text>
      <Text style={{ fontSize: 25, top: 60 }}>{age}</Text>
      <Text style={{ fontSize: 25, top: 60 }}>{fName}</Text>
      <Text style={{ fontSize: 25, top: 60 }}>{myFunc()}</Text>
      <Text style={{ fontSize: 25, top: 60 }}>
        {age >= 18 ? "You Are 18+" : "You Are Not 18+"}
      </Text>

      <Button title="Press Here"></Button>
    </View>
  );
}
