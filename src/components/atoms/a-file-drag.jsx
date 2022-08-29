import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AText from './a-text';
import Aicon from './a-icon';
import AcameraAlert from './a-cameraAlert';
import Base64 from '../../utils/base64';

export default function AfileDrag({
  label,
  onChange,
  desc,
  multiple,
  containerStyle,
  imgs,
  ...res
}) {
  useEffect(() => {
    if (imgs != '') {
      setimages([imgs]);
    }
  }, [imgs]);

  var Items = [1, 2, 3, 4, 5, 6];
  const [visible, setvisible] = useState(false);
  const [image, setimage] = useState('base64');
  const [images, setimages] = useState([]);
  const onVisible = () => {
    setvisible(!visible);
  };
  return (
    <>
      <TouchableOpacity
        style={[containerStyle, styles.container]}
        onPress={() => onVisible()}
        activeOpacity={0.5}
        {...res}
      >
        <View style={styles.text}>
          <Aicon
            name="cloud-upload-outline"
            type="Ionicons"
            color="#63a4f4"
            size={40}
          />
          <AText style={{fontSize: 10}}>{label}</AText>
          <AText style={styles.desc}>{desc}</AText>
        </View>
        <View style={styles.top_cont}>
          {Items.map((x, i) => (
            <View key={i} style={styles.top} />
          ))}
        </View>
        <View style={styles.centered}>
          <View style={styles.coll}>
            {Items.map((x, i) => (
              <View key={i} style={styles.cntr} />
            ))}
          </View>
          <View style={styles.coll}>
            {Items.map((x, i) => (
              <View key={i} style={styles.cntr} />
            ))}
          </View>
        </View>

        <View style={[styles.top_cont, {marginTop: -10}]}>
          {Items.map((x, i) => (
            <View key={i} style={styles.bttm} />
          ))}
        </View>
      </TouchableOpacity>
      <AcameraAlert
        // multiple
        visible={visible}
        onChange={img => {
          if (multiple) {
            var newImages = [...images];
            newImages.push(img);
            onChange(newImages);
            setimages(newImages);
          } else {
            onChange(img);
            setimage(img);
          }
        }}
        onClose={() => onVisible()}
      />
      <View style={{marginBottom: 10}}>
        {multiple ? (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              flex: 1,
            }}
          >
            {images.map((x, i) => (
              <View
                key={i}
                style={{
                  width: '33.3%',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    var newImages = images.filter(b => b != x);
                    onChange(newImages);
                    setimages(newImages);
                  }}
                  style={{
                    position: 'absolute',
                    padding: 3,
                    zIndex: 999,
                    right: 1.2,
                    top: 0,
                  }}
                >
                  <Aicon name={'close'} size={14} color="#DDD" />
                </TouchableOpacity>
                <Image
                  resizeMode="cover"
                  style={{height: 100, width: '98%', marginBottom: 2}}
                  source={{
                    uri:
                      x != undefined
                        ? x.match(/https/) || x.match(/http/)
                          ? x
                          : Base64.decode(x)
                        : null,
                  }}
                />
              </View>
            ))}
          </View>
        ) : (
          <Image
            style={{height: 100, width: 100}}
            source={{uri: Base64.decode(image)}}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  desc: {
    fontSize: 8,
    color: '#63a4f4',
  },
  top_cont: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  top: {
    borderTopWidth: 2,
    width: 10,
    borderColor: '#63a4f4',
  },
  bttm: {
    borderBottomWidth: 2,
    width: 10,
    borderColor: '#63a4f4',
  },
  cntr: {
    borderLeftWidth: 2,
    height: 10,
    marginBottom: 10,
    borderColor: '#63a4f4',
  },
  coll: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  centered: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
