import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';

export default function HcardContact() {
  return (
    <View style={styles.container}>
      <AText style={styles.head_text}>Contact Me</AText>
      <View style={styles.form}>
        <TextInput placeholder="Name" style={styles.input_name} />

        <TextInput
          numberOfLines={5}
          multiline
          placeholder="Message"
          style={styles.message}
        />
      </View>
      <TouchableOpacity style={styles.send}>
        <AText style={{color: 'green'}}>Send</AText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  },
  head_text: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 16,
  },
  form: {
    width: '100%',
    marginTop: 10,
  },
  input_name: {
    borderWidth: 0.2,
    borderRadius: 6,
    padding: 5,
  },
  message: {
    textAlignVertical: 'top',
    borderWidth: 0.2,
    borderRadius: 6,
    marginTop: 15,
    padding: 5,
  },
  send: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    width: '100%',
    padding: 8,
    borderColor: 'green',
  },
});
