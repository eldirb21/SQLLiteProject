import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Base64 from '../../utils/base64';

const {height, width} = Dimensions.get('window');
export default function AarticleItem({
  onPress,
  image,
  subject,
  insertAt,
  insertTime,
  title,
  desc,
  onPressSub,
  sub_subject,
  sub_subjectAt,
  sub_subjectDate,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.content_body}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Image
            style={styles.img}
            source={{
              uri:
                image.match(/https/) || image.match(/http/)
                  ? image
                  : Base64.decode(image),
            }}
          />
        </TouchableOpacity>
        <View style={styles.body_right}>
          <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <AText numberOfLines={2} style={styles.subject}>
              {subject}
            </AText>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <AText style={{color: '#22732a'}}>{insertAt}</AText>
            <AText style={{color: '#9f9fa5'}}>
              <AText> - </AText>
              {insertTime}
            </AText>
          </View>
          <AText numberOfLines={2} style={{color: '#878590'}}>
            <AText style={{color: '#6e6c6b'}}>{title} </AText>
            {desc}
          </AText>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPressSub}
        style={styles.footer}
      >
        <AText style={styles.sub_subject}>{sub_subject}</AText>
        <AText style={styles.sub_action}>
          {sub_subjectAt}
          <AText style={{color: '#9f9fa5'}}> - {sub_subjectDate}</AText>
        </AText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#f7f7f7',
    paddingHorizontal: 5,
  },
  content_body: {
    flexDirection: 'row',
  },
  img: {
    flex: 1,
    // width: 100,
    width: width / 3.5,
  },
  body_right: {
    marginLeft: 10,
    flex: 1,
  },
  subject: {
    color: '#2a39bf',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    flex: 1,
    marginVertical: 5,
  },
  sub_subject: {
    color: '#2a39bf',
    fontWeight: '400',
    fontSize: 14,
  },
  sub_action: {
    color: '#22732a',
    fontWeight: '700',
  },
});
