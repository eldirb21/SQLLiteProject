import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import ASpinner from '../../components/atoms/a-spinner';
import AappBar from '../../components/molecules/a-appBar';
import AarticleDetail from '../../components/molecules/a-article-detail';
import EditArticle from './edit-article';

export default function DetailArticle(props) {
  var dta = props.route.params;
  const [data, setdata] = useState(dta);
  const [loading, setloading] = useState(false);
  const [ShowEdit, setShowEdit] = useState(false);
  const dateCreated = new Date(data.dateCreated);

  var newDate =
    dateCreated.getDate() +
    '-' +
    dateCreated.getMonth() +
    '-' +
    dateCreated.getFullYear();
// console.log(dta);
  return (
    <AContainer>
      <AappBar
        onBackCustom={() => props.navigation.goBack()}
        title="Article details"
        textColor="#000"
        size={28}
        bordered
      />
      <AContent scroll>
        <AarticleDetail
          onEdit={() => setShowEdit(!ShowEdit)}
          image={data.image}
          title={data.author}
          desc={data.articleBody}
          subject={data.description}
          insertAt={data.editor}
          insertTime={newDate}
        />
        <EditArticle
          data={data}
          visible={ShowEdit}
          onClose={() => setShowEdit(!ShowEdit)}
          onGoBack={() => {
            setShowEdit(!ShowEdit);
            props.navigation.goBack();
          }}
        />
      </AContent>

      <ASpinner visible={loading} />
    </AContainer>
  );
}
const styles = StyleSheet.create({
  img: {
    // height: 100,
    width: '100%',
    flex: 1,
  },
});
