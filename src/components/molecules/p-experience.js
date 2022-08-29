import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';

var color = {color: '#FFF'};
export default function Pexperience({data, onPress}) {
  const [Items, setItems] = useState([
    {
      joinDate: 'Juni 2020',
      endDate: 'October 2020',

      compay: 'Pt.Emco digital indonesia',
      position: 'Junior Developer',
      jobdesc: [
        'Design Mocup',
        'Handling and Solving Bugs',
        'Maintenance Website',
        'Implement Ui Ux design in application',
        'Manual testing',
      ],
    },
    {
      joinDate: 'Juni 2020',
      endDate: 'October 2020',

      compay: 'Pt.Emco digital indonesia',
      position: 'Junior Developer',
      jobdesc: [
        'Design Mocup',
        'Handling and Solving Bugs',
        'Maintenance Website',
        'Implement Ui Ux design in application',
        'Manual testing',
      ],
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AText style={styles.label}>Experience</AText>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={styles.edit}
        >
          <Aicon name="edit" color="#FFF" size={12} />
        </TouchableOpacity>
      </View>
      {Items.map((x, i) => {
        var indexEnd = Items.length - 1;
        return (
          <View key={i} style={[indexEnd != i && styles.container]}>
            <AText style={styles.company}>{x.compay}</AText>
            <AText style={color}>{`${x.joinDate} - ${x.endDate}`}</AText>
            <AText style={styles.position}>{x.position}</AText>

            <View>
              <AText style={styles.jobdesc}>Job Description</AText>
              {x.jobdesc.map((xx, ii) => (
                <View key={ii} style={{flexDirection: 'row'}}>
                  <AText style={styles.jnumb}>{ii + 1 && '-'}</AText>
                  <AText style={styles.label_item}>{xx}</AText>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  company: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '700',
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
  position: {
    color: '#FFF',
    marginVertical: 10,
  },
  jobdesc: {
    color: '#FFF',
    fontWeight: '700',
  },
  jnumb: {
    color: '#FFF',
    fontWeight: '700',
  },
  label_item: {
    color: '#FFF',
    marginLeft: 10,
    flex: 1,
  },
});
