import I18n from "ex-react-native-i18n";
import * as Localization from "expo-localization";

// Translations
import en from "./en.json";
import es from "./es.json";

// default
I18n.defaultLocale = "es";

I18n.translations = {
  en,
  es,
};

// Set app to local phones settings
const getLanguage = () => {
  try {
    // Set the locale once at the beginning of your app.
    I18n.locale = Localization.locale;
    // When a value is missing from a language it'll fallback to another language with the key present.
    I18n.fallbacks = true;
  } catch (err) {
    console.log("Unable to get locale");
  }
};

getLanguage();

// Export module
export function t(name) {
  return I18n.t(name);
}

export const changeLaguage = (language) => {
  I18n.locale = language;
};
