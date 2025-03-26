import { StyleSheet, View, Text, I18nManager, Pressable } from "react-native";
import * as Updates from "expo-updates";

import { getLocale, i18n, storage, translate } from "@/i18n";

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{translate("hello")}</Text>
			<Text style={styles.title}>Locale: {i18n.locale}</Text>
			<Text>Direction: {I18nManager.isRTL ? "RTL" : "LTR"}</Text>
			<View style={styles.separator} />
			<Pressable
				onPress={() => {
					const locale = getLocale();
					const nextLocale = locale === "en" ? "ar" : "en";
					storage.set("lang", nextLocale);
					I18nManager.forceRTL(nextLocale === "ar");
					Updates.reloadAsync();
				}}
			>
				<Text>Switch Language</Text>
			</Pressable>
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
