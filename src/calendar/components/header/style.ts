import type { Theme } from '../../../types';
import * as defaultStyles from '../../../styles';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const makeStyle = (theme: Theme = {}) => {
  const mergedStyles = { ...defaultStyles, ...theme };

  return StyleSheet.create({
    header: {
      backgroundColor: mergedStyles.backgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    } as ViewStyle,
    daysHeader: {
      flexDirection: 'row',
      backgroundColor: mergedStyles.backgroundColor,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 5,
    } as ViewStyle,
    headerTitle: {
      flexDirection: 'row',
    } as ViewStyle,
    titleText: {
      fontSize: mergedStyles.textMonthFontSize,
      fontFamily: mergedStyles.textMonthFontFamily,
      fontWeight: mergedStyles.textMonthFontWeight,
      color: mergedStyles.titleTextColor,
    } as TextStyle,
    dayText: {
      width: '14.2857143%',
      textAlign: 'center',
      fontSize: mergedStyles.textDayHeaderFontSize,
      fontFamily: mergedStyles.textDayHeaderFontFamily,
      fontWeight: mergedStyles.textDayHeaderFontWeight,
      color: mergedStyles.textSectionTitleColor,
    } as TextStyle,
    arrow: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    } as ViewStyle,
    arrowImage: {
      width: mergedStyles.arrowWidth,
      height: mergedStyles.arrowHeight,
      tintColor: mergedStyles.arrowColor,
    } as ImageStyle,
    space: {
      paddingHorizontal: 4,
    } as ViewStyle,
  });
};
