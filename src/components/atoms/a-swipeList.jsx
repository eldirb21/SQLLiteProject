import React from 'react';
import {View} from 'react-native';
import Swipeout from 'react-native-swipeout';
 
export default function AswipeList(props) {
   const {onPressRight, containerStyle} = props;
  return (
    <Swipeout
      backgroundColor="transparent"
      autoClose
      right={[
        {
          text: 'Delete',
          type: 'delete',
          onPress: onPressRight,
        },
      ]}>
      <View style={containerStyle}>{props.children}</View>
    </Swipeout>
  );
}
