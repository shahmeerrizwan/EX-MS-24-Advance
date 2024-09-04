import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";

export default function HomeScreen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [imageList, setImageList] = useState<string[]>([]);
  const [permission, requestPermission] = useCameraPermissions();
  const camera = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    const picture = await camera.current.takePictureAsync();
    console.log(picture);
    setImageList([...imageList, picture.uri]);
    setIsCameraOpen(false); // Close the camera after taking a picture
  }

  const renderItem = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.imageList} />
  );

  return (
    <View style={{ flex: 1 }}>
      {isCameraOpen ? (
        <CameraView ref={camera} facing={facing} style={styles.camera}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={{ flex: 1 }}>
          <Button
            title="Open Camera"
            onPress={() => setIsCameraOpen(true)}
          />
          <FlatList
            data={imageList}
            renderItem={renderItem}
            keyExtractor={ index => index.toString()}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    zIndex: 10000,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: "auto",
    height: "auto",
    flex: 1,
    zIndex: 10000,
  },
  imageList: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
