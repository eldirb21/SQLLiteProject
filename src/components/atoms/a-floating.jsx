import React, {useContext, useState} from 'react';
import {
  Alert,
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AFloating(props) {
  const onFloating = () => {
    Alert.alert('Floating action button Clicked');
  };
  const {customStyle, bacground, bottom, icon, color} = props;
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onFloating}
        style={styles.btn_action}
      >
        <Image
          source={{
            uri:
              'https://www.techup.co.in/wp-content/uploads/2020/03/ic_cart_image.png',
          }}
          style={styles.btn_icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  btn_action: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#0B66D3',
    borderColor: '#000000',
    borderRadius: 200 / 2,
  },

  btn_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});
