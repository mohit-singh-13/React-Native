import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={"large"}
        color={"white"}
        style={styles.container}
      />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500
  },
});
