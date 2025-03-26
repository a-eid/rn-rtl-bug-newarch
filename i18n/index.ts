import { I18n, type TranslateOptions } from "i18n-js";
import { getLocales } from "expo-localization";

import ar from "./ar";
import en from "./en";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

const defaultLocale = ["en", "ar"].includes(getLocales()[0].languageTag)
	? getLocales()[0].languageTag
	: "en";

export const i18n = new I18n(
	{ en, ar },
	{
		enableFallback: true,
		locale: storage.getString("lang") || defaultLocale,
	},
);

export function translate(key: keyof typeof en, options?: TranslateOptions) {
	return i18n.t(key, options);
}

export function getLocale() {
	return i18n.locale as "en" | "ar";
}
