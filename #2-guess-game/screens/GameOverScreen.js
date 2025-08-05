import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  console.log("width :", width);
  console.log("height :", height);

  let imageSize = 300;
  let borderRadius = 150;

  if (height < 400) {
    imageSize = 200;
    borderRadius = 100;
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>

        <View
          style={[
            styles.imageContainer,
            { width: imageSize, height: imageSize, borderRadius: borderRadius },
          ]}
        >
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>

        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
