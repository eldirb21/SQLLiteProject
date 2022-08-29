import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AText from './a-text';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Aicon from './a-icon';
import Func from '../../utils/func';

export default function AdateTime({
  label,
  error,
  containerStyle,
  labelStyle,
  textStyle,
  isIcon,
  iconType,
  borderColor,
  ishidden,
  iconWidth,
	onChange,
  ...res
}) {
  const [visible, setvisible] = useState(false);
  const [date, setdate] = useState('');

  const showDatePicker = () => {
    setvisible(true);
  };

  const hideDatePicker = () => {
    setvisible(false);
  };

  const handleConfirm = date => {
    var newDate = new Date(date);
    console.log(newDate);
    console.log('Today is =>', Func.dateFormats(newDate));
		onChange(newDate)
    setdate(Func.dateFormats(newDate));
    hideDatePicker();
  };

  var borders = borderColor ? borderColor : 'grey';
  return (
    <View style={[containerStyle, {marginBottom: 10}]}>
      {label && (
        <AText style={[labelStyle, {color: '#9A9A9A', fontWeight: '500'}]}>
          {label}
        </AText>
      )}
      {isIcon ? (
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.8,
            borderRadius: 10,
            borderColor: borderColor ? borderColor : 'rgba(0,0,0,0.2)',
            width: '100%',
          }}
        >
          <View
            style={{
              flex: 0.4,
              // backgroundColor:'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Aicon name={isIcon} type={iconType} size={20} color={borders} />
          </View>
          <TextInput
            caretHidden
            placeholder={label}
            value={date}
            onTouchStart={val => {
              setvisible(!visible);
            }}
            placeholderTextColor={borders}
            style={[
              textStyle,
              {
                flex: 1,
                // padding: 10,
                borderRadius: 10,
                paddingLeft: 6,
                color: borders,
                // marginLeft:8,
                alignItems: 'center',
                textAlign: 'left',
                // backgroundColor:'green'
              },
            ]}
            {...res}
          />
        </View>
      ) : (
        <View>
          <TextInput
            caretHidden
            placeholder={label}
            value={date}
            onTouchStart={val => {
              setvisible(!visible);
            }}
            placeholderTextColor={borders}
            style={[
              textStyle,
              styles.form,
              {
                color: borders,
                borderColor: borderColor ? borderColor : 'rgba(0,0,0,0.2)',
              },
            ]}
            {...res}
          />
        </View>
      )}
      {error != undefined && (
        <View>
          {error == '' || <AText style={{color: 'red'}}>{error}</AText>}
        </View>
      )}

      <DateTimePickerModal
        // date={new Date()}

        isVisible={visible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        {...res}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  hiddenText: {
    position: 'absolute',
    right: 10,
    padding: 14,
  },
  form: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
  },
});
