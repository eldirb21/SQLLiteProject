import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Base64 from '../../utils/base64';
import Aicon from '../atoms/a-icon';

const {height, width} = Dimensions.get('window');

export default function AarticleDetail({
  onEdit,
  image,
  subject,
  insertAt,
  insertTime,
  title,
  desc,
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '30%',
        }}
      >
        <ImageBackground
          style={styles.img}
          source={{
            uri:
              image != undefined
                ? image.match(/https/) || image.match(/http/)
                  ? image
                  : Base64.decode(image)
                : null,
          }}
        >
          <TouchableOpacity style={styles.edit_btn} onPress={onEdit}>
            <Aicon name="edit" color="#FFF" size={16} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.content_body}>
        <View style={styles.body_right}>
          <AText style={styles.subject}>{subject}</AText>
          <View style={{flexDirection: 'row'}}>
            <AText style={{color: '#22732a'}}>{insertAt}</AText>
            <AText style={{color: '#9f9fa5'}}>
              <AText> - </AText>
              {insertTime}
            </AText>
          </View>
          <AText style={{color: '#878590'}}>
            <AText style={{color: '#6e6c6b'}}>{title} </AText>
            {desc}
          </AText>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 10,
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#f7f7f7',
    // paddingHorizontal: 5,
  },
  content_body: {
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    flex: 1,
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
  edit_btn: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    borderRadius: 100,
    padding: 8,
    right: 5,
    top: 5,
  },
});
