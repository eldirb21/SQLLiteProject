import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';

export default function Pprofile({onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.header}>
          <AText style={styles.label}>Eldir Buulolo</AText>
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.6}
            style={styles.edit}
          >
            <Aicon name="edit" color="#FFF" size={12} />
          </TouchableOpacity>
        </View>
        <View style={styles.desc}>
          <AText style={{color: '#FFF'}}>Software Developer</AText>
          <AText style={styles.notes}>
            I am an experienced Software Developer seeking a full-time position
            in the field of Information Technology, where I can apply my
            knowledge and skills for continuous improvement.
          </AText>
        </View>
      </View>
      <Image style={styles.photos} source={require('../../assets/user.jpeg')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    marginRight: 10,
  },
  desc: {
    backgroundColor: 'rgba(0,0,0,0.11)',
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderRadius: 10,
  },
  notes: {
    color: '#FFF',
    fontSize: 12.5,
    textAlign: 'justify',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFF',
    paddingBottom: 4,
    marginBottom: 5,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#FFF',
    flex: 1,
  },
  edit: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 5,
    borderRadius: 100,
  },
  photos: {
    height: 150,
    width: 115,
    borderRadius: 10,
  },
});
