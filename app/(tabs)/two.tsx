import { getLocale, storage, translate } from "@/i18n";
import { StyleSheet, View, Text, Pressable, I18nManager } from "react-native";

export default function TabTwoScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{translate("hello")}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
