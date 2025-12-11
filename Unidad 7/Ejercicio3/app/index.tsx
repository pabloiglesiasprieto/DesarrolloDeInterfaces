import { Text, View } from "react-native";
import ScrollToTopList from "../assets/components/ScrollToTopList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollToTopList />
    </View>
  );
}
