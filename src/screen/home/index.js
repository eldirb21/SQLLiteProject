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
import HcardProfile from '../../components/molecules/h-card-profile';
import HcardAbout from '../../components/molecules/h-card-about';
import HcardContact from '../../components/molecules/h-card-contact';

const {width, height} = Dimensions.get('window');
export default function Home(props) {
  const [loading, setloading] = useState(false);
  const [medsos, setmedsos] = useState([
    {
      name: 'linkedin',
      icon: 'linkedin-with-circle',
      iconType: 'Entypo',
    },
    {
      name: 'github',
      icon: 'github',
      iconType: 'AntDesign',
    },
    {
      name: 'facebook',
      icon: 'facebook',
      iconType: '',
    },
    {
      name: 'instagram',
      icon: 'instagram',
      iconType: 'Feather',
    },
    {
      name: 'dribble',
      icon: 'dribbble',
      iconType: 'Feather',
    },
  ]);
  return (
    <AContainer>
      <AContent ph={10} pt={5} bg="#fff" scroll>
        <HcardProfile medsos={medsos} />

        <View style={styles.content}>
          <HcardAbout />
          <HcardContact />
        </View>
      </AContent>
      <ASpinner visible={loading} />
    </AContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingBottom: 10,
    // backgroundColor: 'pink',
  },
});
