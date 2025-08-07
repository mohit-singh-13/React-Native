import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/authContext";

function WelcomeScreen() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await axios.get(``);

        setMessage(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getMessage();
  }, []);

  if (isLoading) {
    return <LoadingOverlay message={"Fetching..."} />;
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>Message: {message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
