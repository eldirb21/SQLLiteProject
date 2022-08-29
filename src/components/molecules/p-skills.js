import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';
import {ProgressBar} from '@react-native-community/progress-bar-android';

var persen = 100;
export default function Pskills({skills, onPress}) {
  const validatePersen = itm => {
    var value = parseInt(itm) / persen;
    return value;
  };
  const validateColor = itm => {
    var value = parseInt(itm) / persen;
    if (value >= 0.8) return 'green';
    else if (value >= 0.7) return 'yellow';
    else if (value >= 0.6) return 'pink';
    return 'red';
  };

  return (
    <View style={{marginBottom: 20}}>
      <View style={styles.header}>
        <AText style={styles.label}>Skills</AText>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={styles.edit}
        >
          <Aicon name="edit" color="#FFF" size={12} />
        </TouchableOpacity>
      </View>
      <View>
        {skills.map((x, i) => {
          return (
            <View key={i} style={{marginBottom: 8}}>
              <AText style={{color: '#FFF'}}>{x.sub}</AText>
              <View style={{flexDirection: 'row'}}>
                <ProgressBar
                  // <ProgressBarAndroid
                  style={{flex: 1, marginRight: 20}}
                  color={validateColor(x.persen)}
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={validatePersen(x.persen)}
                />
                <AText style={{color: '#FFF'}}>{x.persen + ' %'}</AText>
              </View>
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
