import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';

export default function HcardAbout() {
  return (
    <View style={styles.container}>
      <AText style={styles.head_text}>About Me</AText>
      <View style={styles.content}>
        <Image
          style={styles.img}
          source={require('../../assets/abaut-img.png')}
        />
        <View style={styles.texts}>
          <AText style={styles.why}>Why hire me for your next Project?</AText>
          <AText style={styles.desc}>
            Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
            ditempatkan untuk mendemostrasikan elemen grafis atau presentasi
            visual seperti font, tipografi, dan tata letak.
          </AText>
        </View>
      </View>
      {/* <View
        style={{
          width: '100%',
        }}
      >
        <AText
          style={{
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Image
            // resizeMode="contain"
            style={
              {
								height:100,
								width:100,
								margin:20,
                // flex: 1,
              }
            }
            source={require('../../assets/abaut-img.png')}
          />
          <AText style={{margin:20,padding:20}}>
            Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
            ditempatkan untuk mendemostrasikan elemen grafis atau presentasi
            visual seperti font, tipografi, dan tata letak.
          </AText>
        </AText>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    alignItems: 'center',
    marginTop: 10,
    flex: 1,
  },
  head_text: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
  },
  content: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    padding: 6,
    borderRadius: 10,
  },
  img: {
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 0,
    height: 110,
    width: 110,
  },
  texts: {
    marginLeft: 5,
    flex: 1,
  },
  why: {
    fontWeight: '700',
    fontSize: 13,
  },
  desc: {
    fontSize: 13,
    textAlign: 'justify',
    // backgroundColor:'red',
    marginRight: -4,
  },
});
