// app/locales/new.ts

import { merge } from "../utils/merge";
import { LocaleType } from "./cn";

const new: PartialLocaleType = {
  // Define translations for the new language here
};

const fallbackLang = en;
const targetLang = ALL_LANGS[getLang()] as LocaleType;

// Merge the translations with the fallback language
merge(fallbackLang, targetLang);

export default fallbackLang as LocaleType;
