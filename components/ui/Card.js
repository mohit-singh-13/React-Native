import {
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  const { width } = useWindowDimensions();

  const maxWidth = width < 400 ? "80%" : "50%";

  return (
    <View style={[styles.inputContainer, { maxWidth: maxWidth }]}>
      {children}
    </View>
  );
};

export default Card;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary800,
    // maxWidth: deviceHeight < 400 ? "50%" : "80%",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    alignItems: "center",
    gap: 5,
  },
});
