import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ProgressBarAndroid,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import AFloating from '../../components/atoms/a-floating';
import ASpinner from '../../components/atoms/a-spinner';
import AText from '../../components/atoms/a-text';
import Pprofile from '../../components/molecules/p-profile';
import Pexperience from '../../components/molecules/p-experience';
import Pskills from '../../components/molecules/p-skills';
import Peducation from '../../components/molecules/p-education';
import Aicon from '../../components/atoms/a-icon';
import Pcontact from '../../components/molecules/p-contact';
var RNFS = require('react-native-fs');

const {width, height} = Dimensions.get('window');

export default function HcardProfile({medsos}) {
  const uploadFile = () => {
    // RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    //   .then(result => {
    //     console.log('GOT RESULT', result);
    //     // stat the first file
    //     // return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //   })
    //   // .then(statResult => {
    //   //   if (statResult[0].isFile()) {
    //   //     // if we have a file, read it
    //   //     return RNFS.readFile(statResult[1], 'utf8');
    //   //   }
    //   //   return 'no file';
    //   // })
    //   // .then(contents => {
    //   //   // log the file contents
    //   //   console.log(contents);
    //   // })
    //   .catch(err => {
    //     console.log(err.message, err.code);
    //   });
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.body_left}>
          <AText style={styles.hi_text}>
            Hi There !, {'\n'}
            <AText style={styles.introduce}>I'm Eldir Buulolo</AText>
          </AText>
          <AText style={styles.text_profesi}>I'm a Software Developer</AText>

          <View style={styles.btn_container}>
            <TouchableOpacity style={[styles.hiring, styles.btn]}>
              <AText style={[styles.btn_text, styles.text_hiring]}>
                Hiring Me
              </AText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => uploadFile()} style={styles.btn}>
              <AText style={styles.btn_text}>Resume</AText>
            </TouchableOpacity>
          </View>
          <View style={styles.medsos_container}>
            {medsos.map((x, i) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (x.name == 'linkedin') {
                      Linking.openURL('https://www.linkedin.com/in/eldirb');
                    } else if (x.name == 'instagram') {
                      Linking.openURL('http://instagram.com/');
                    } else if (x.name == 'github') {
                      Linking.openURL('https://github.com/eldirb21');
                    } else if (x.name == 'facebook') {
                      Linking.openURL('https://www.facebook.com/profile.php?id=100082561069661');
                    } else if (x.name == 'dribble') {
                      Linking.openURL('https://dribbble.com/eldiro');
                    }
                  }}
                  style={styles.medsos_item}
                  activeOpacity={0.7}
                  key={i}
                >
                  <Aicon
                    type={x.iconType}
                    name={x.icon}
                    color="#FFF"
                    size={14}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.body_right}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={require('../../assets/eldiro.jpeg')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <AText style={styles.motto}>
          "All our dreams can come true if we have the courage to pursue them.{' '}
          <AText style={styles.motto_by}>'Walt Disney'</AText>"
        </AText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 3,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    // backgroundColor:'red'
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body_left: {
    width: '60%',
    // backgroundColor:'grey',
    paddingHorizontal: 10,
  },
  hi_text: {
    fontWeight: '700',
  },
  introduce: {
    fontSize: 18,
    fontWeight: '700',
  },
  text_profesi: {
    fontWeight: '700',
    marginVertical: 10,
    color: 'yellow',
  },

  btn_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    padding: 3,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
    margin: 2,
    width: '48%',
  },
  hiring: {
    backgroundColor: 'green',
  },
  text_hiring: {
    color: '#FFF',
  },
  btn_text: {
    fontSize: 12,
    color: 'green',
  },

  medsos_container: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  medsos_item: {
    padding: 5,
    margin: 2,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  body_right: {
    alignItems: 'center',
    width: '40%',
    height: '100%',
    padding: 10,
    // backgroundColor: 'red',
  },
  img: {
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 0,
    borderColor: 'green',
    borderWidth: 2,
    height: 150,
    width: 120,
  },
  footer: {
    marginTop: 0,
  },
  motto: {
    textAlign: 'center',
    color: 'grey',
  },
  motto_by: {
    color: 'grey',
    fontWeight: '600',
  },
});
