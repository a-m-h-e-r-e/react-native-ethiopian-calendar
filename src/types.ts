import type { TextStyle, ViewStyle } from 'react-native';

export type Theme = {
  contentStyle?: ViewStyle;
  todayTextColor?: string;
  calendarBackground?: string;
  textSectionTitleColor?: string;
  dayTextColor?: string;
  selectedDayTextColor?: string;
  titleTextColor?: string;
  selectedDayBackgroundColor?: string;
  arrowColor?: string;
  textDisabledColor?: string;
  textInactiveColor?: string;
  backgroundColor?: string;
  selectedDotColor?: string;
  disabledArrowColor?: string;
  textDayFontFamily?: TextStyle['fontFamily'];
  textMonthFontFamily?: TextStyle['fontFamily'];
  textDayHeaderFontFamily?: TextStyle['fontFamily'];
  textDayFontWeight?: TextStyle['fontWeight'];
  textMonthFontWeight?: TextStyle['fontWeight'];
  textDayHeaderFontWeight?: TextStyle['fontWeight'];
  textDayFontSize?: number;
  textMonthFontSize?: number;
  textDayHeaderFontSize?: number;
  todayButtonFontFamily?: TextStyle['fontFamily'];
  todayButtonFontWeight?: TextStyle['fontWeight'];
  todayButtonFontSize?: number;
  textDayStyle?: TextStyle;
  arrowStyle?: ViewStyle;
  todayBackgroundColor?: string;
  todayButtonTextColor?: string;
  todayButtonPosition?: string;
  arrowHeight?: number;
  arrowWidth?: number;
  weekVerticalMargin?: number;
};
