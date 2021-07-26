import {
  SWITCH_LANGUAGE
} from "../../constants/actionTypes";
import {
  LAYOUT_TYPE,
  LAYOUT_TYPE_FULL,
  NAV_STYLE,
  NAV_STYLE_MINI_SIDEBAR,
  THEME_COLOR,
  THEME_TYPE,
  THEME_TYPE_SEMI_DARK
} from "../../constants/themeSetting";

const initialSettings = {
  navStyle: NAV_STYLE_MINI_SIDEBAR,
  layoutType: LAYOUT_TYPE_FULL,
  themeType: THEME_TYPE_SEMI_DARK,
  themeColor: THEME_COLOR,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {

    case THEME_TYPE:
      return {
        ...state,
        themeType: action.themeType
      };
    case THEME_COLOR:
      return {
        ...state,
        themeColor: action.themeColor
      };

    case NAV_STYLE:
      return {
        ...state,
        navStyle: action.navStyle
      };
    case LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.layoutType
      };

    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload,

      };
    default:
      return state;
  }
};

export default settings;
