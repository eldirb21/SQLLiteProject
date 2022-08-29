import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';

export default function Pcontact({contact, onPress}) {
  return (
    <View style={{marginBottom: 20}}>
      <View style={styles.header}>
        <AText style={styles.label}>Contact</AText>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={styles.edit}
        >
          <Aicon name="edit" color="#FFF" size={12} />
        </TouchableOpacity>
      </View>
      <View>
        {contact.map((x, i) => {
          return (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 45,
                borderBottomWidth: 0.2,
                borderColor: '#FFF',
              }}
            >
              <Aicon
                type={x.type}
                name={x.icon}
                color="#FFF"
                size={16}
                style={{
                  marginRight: 10,
                  borderRadius: 20,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: 6,
                }}
              />
              <AText style={{color: '#FFF'}}>{x.sub}</AText>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
