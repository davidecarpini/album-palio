import strings from "./strings";

let langStored;
let language;
let dict;
let refreshPage;

class Language {
  static init = (lang, refreshPageParam) => {
    langStored = lang;
    language = lang.language;
    dict = strings[language];
    refreshPage = refreshPageParam;
  };

  static get = string => {
    return dict[string];
  };

  static setLanguage = lang => {
    language = lang;
    dict = strings[lang];
    langStored.setLanguage(lang);
    refreshPage && refreshPage();
  };

  static getLanguage = () => {
    return language;
  };
}

export default Language;
