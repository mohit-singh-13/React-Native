import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Notification from "expo-notifications";
import { useEffect } from "react";

Notification.setNotificationHandler({
  handleNotification: async (notification) => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    const subscription = Notification.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED");
        console.log(notification);
      }
    );

    return () => subscription.remove();
  }, []);

  const scheduleNotificationHandler = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: { userName: "Mohit Singh" },
      },
      trigger: {
        type: Notification.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 2,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
