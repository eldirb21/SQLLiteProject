import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import ASpinner from '../../components/atoms/a-spinner';
import AappBar from '../../components/molecules/a-appBar';
import AFloating from '../../components/atoms/a-floating';
import dataArticle from '../../db/datas/data-article.json';
import AText from '../../components/atoms/a-text';
import AarticleItem from '../../components/molecules/a-article-item';
import DB from '../../db/SQLite';
export default function Article(props) {
  const [loading, setloading] = useState(false);
  const [ShowAdd, setShowAdd] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    // DB.post('article', dataArticle)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    load();
    const focused = props.navigation.addListener('focus', () => {
      load();
    });
    return focused;
  }, []);
  const load = () => {
    setloading(true);
    DB.getList('article', 'id')
      .then(res => {
        setdata(res.data);
        setloading(false);
      })
      .catch(err => {
        console.log(err);
        setloading(false);
      });
  };

  const renderItem = ({item, index}) => {
    const dateCreated = new Date(item.dateCreated);
    var newDate =
      dateCreated.getDate() +
      '-' +
      dateCreated.getMonth() +
      '-' +
      dateCreated.getFullYear();

    return (
      <AarticleItem
        onPress={() => {
          props.navigation.navigate('DetailArticle', item);
        }}
        title={item.author}
        image={item.image}
        desc={item.articleBody}
        subject={item.description}
        insertAt={item.editor}
        insertTime={newDate}
        onPressSub={() => {
          console.log('onPressSub');
        }}
        sub_subject={
          "'Sistes': Tina Fey, Amy Poechler Get Raunchy at Comedy Premiere"
        }
        sub_subjectAt={'Variety'}
        sub_subjectDate={'22 hours ago'}
      />
    );
  };
  return (
    <AContainer>
      <AappBar title="Article" textColor="#000" size={28} bordered />
      <AContent bg="#ffffff" containerStyle={{paddingTop: 5}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </AContent>
      {/* <AFloating onPress={() => setShowAdd(true)} /> */}
      <AFloating onPress={() => props.navigation.navigate('AddArticle')} />
      <ASpinner visible={loading} />
    </AContainer>
  );
}
