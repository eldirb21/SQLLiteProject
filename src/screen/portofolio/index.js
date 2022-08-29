import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ProgressBarAndroid,
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

export default function Portofolio(props) {
  const [loading, setloading] = useState(false);
  const [skills, setskills] = useState([
    {sub: 'JavaScript', persen: 90},
    {sub: 'Mobile Developer', persen: 80},
    {sub: 'Spring Boot', persen: 70},
    {sub: 'Ui Design', persen: 60},
    {sub: 'MySQl', persen: 50},
  ]);
  const [edu, setedu] = useState([
    {
      sub: 'Universitas Raharja',
      startDate: '2018',
      endDate: 'Current',
      level: 'diploma',
      major: 'Sistem Informasi Manajemen',
      concentration: 'Manajemen Informatika',
      gpa: 3.22,
    },
    {
      sub: 'Universitas Raharja',
      startDate: '2018',
      endDate: 'Current',
      level: 'SMK',
      major: 'Sistem Informasi Manajemen',
      concentration: 'Manajemen Informatika',
      gpa: 3.22,
    },
    {
      sub: 'Universitas Raharja',
      startDate: '2018',
      endDate: 'Current',
      level: 'SMP',
      major: 'Sistem Informasi Manajemen',
      concentration: 'Manajemen Informatika',
      gpa: 3.22,
    },
    {
      sub: 'Universitas Raharja',
      startDate: '2018',
      endDate: 'Current',
      level: 'SD',
      major: 'Sistem Informasi Manajemen',
      concentration: 'Manajemen Informatika',
      gpa: 3.22,
    },
  ]);
  const [contact, setcontact] = useState([
    {type: 'phone', sub: '08123123432', icon: 'phone'},
    {type: 'mail', sub: 'werewr@gmail.com', icon: 'mail'},
    {
      type: 'web',
      sub: 'https://www.linkedin.com/in/eldirb/',
      type: 'Ionicons',
      icon: 'logo-linkedin',
    },
    {type: 'address', sub: 'Jl. Bidar XII, Tangerang, Banten', icon: 'home'},
  ]);
  return (
    <AContainer>
      <AappBar title="Portofolio" textColor="#000" size={28} bordered />
      <AContent ph={10} pt={5} bg="#004aad" scroll>
        <Pprofile />

        <Pexperience />

        <Pskills skills={skills} />

        <Peducation edu={edu} />

        <Pcontact contact={contact} />
      </AContent>
      <ASpinner visible={loading} />
    </AContainer>
  );
}
