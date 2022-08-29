import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

export default function AContent(props) {
  var {bg, scroll, children,pt, pd, ph, pv, containerStyle} = props;

  var styled = [
    containerStyle,
    {
      flex: 1,
      display: 'flex',
      backgroundColor: bg,
    },
  ];
  return scroll ? (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      style={[
        styled,
        pd && {padding: 20},
        ph && {paddingHorizontal: typeof ph != 'boolean' ? ph : 20},
				pt && {paddingTop: typeof pt != 'boolean' ? pt : 20},
        pv && {paddingVertical: 20},
      ]}
      {...props}
    >
      <View
        style={{
          flex: 1,
          marginBottom: 4,
          padding: pd ? 20 : 0,
        }}
      >
        {children}
      </View>
    </ScrollView>
  ) : (
    <SafeAreaView
      style={[
        styled,
        pd && {padding: 20},
        ph && {paddingHorizontal: 20},
        pv && {paddingVertical: 20},
      ]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
}
