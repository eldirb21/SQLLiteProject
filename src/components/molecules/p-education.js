import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';

export default function Peducation({edu, onPress}) {
  return (
    <View style={{marginBottom: 20}}>
      <View style={styles.header}>
        <AText style={styles.label}>Education</AText>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={styles.edit}
        >
          <Aicon name="edit" color="#FFF" size={12} />
        </TouchableOpacity>
      </View>
      <View>
        {edu.map((x, i) => {
          return (
            <View
              key={i}
              style={{
                marginBottom: 10,
                borderBottomWidth: 0.15,
                borderColor: '#FFF',
                paddingBottom: 10,
              }}
            >
              <AText style={{color: '#FFF'}}>{x.sub}</AText>
              <View style={{flexDirection: 'row'}}>
                <AText
                  style={{marginRight: 20, color: '#FFF'}}
                >{`${x.startDate} - ${x.endDate}`}</AText>
                <AText style={{color: '#FFF', textTransform: 'uppercase'}}>
                  {x.level}
                </AText>
              </View>
              <AText style={{color: '#FFF'}}>{x.gpa}</AText>
              <AText style={{color: '#FFF'}}>{x.major}</AText>
              <AText style={{color: '#FFF'}}>{x.concentration}</AText>
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
