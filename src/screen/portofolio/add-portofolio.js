import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import ASpinner from '../../components/atoms/a-spinner';
import AText from '../../components/atoms/a-text';

export default function AddPortofolio(props) {
  const [loading, setloading] = useState(false);
  return (
    <AContainer>
      <AappBar
        onBackCustom={() => props.navigation.goBack()}
        title="Portofolio add"
        textColor="#000"
        size={28}
        bordered
      />
      <AContent bg="#ffffff" containerStyle={{paddingTop: 5}}>
        <View>
          <AText>Experience</AText>
        </View>
      </AContent>

      <ASpinner visible={loading} />
    </AContainer>
  );
}
