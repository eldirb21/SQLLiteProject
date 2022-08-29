import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import ASpinner from '../../components/atoms/a-spinner';
import AappBar from '../../components/molecules/a-appBar';
import Abutton from '../../components/atoms/a-button';
import AtextInput from '../../components/atoms/a-textInput';
import AdateTime from '../../components/atoms/a-date-time';
import Func from '../../utils/func';
import AtextArea from '../../components/atoms/a-textArea';
import Aicon from '../../components/atoms/a-icon';
import AText from '../../components/atoms/a-text';
import AfileDrag from '../../components/atoms/a-file-drag';
import DB from '../../db/SQLite';

export default function AddArticle(props) {
  const [loading, setloading] = useState(false);
  const [ShowAdd, setShowAdd] = useState(false);
  const [date, setdate] = useState(new Date());
  const [Inputs, setInputs] = useState({
    context: '',
    type: '',
    headline: '',
    alternativeHeadline: '',
    image: '',
    author: '',
    award: '',
    editor: '',
    genre: '',
    keywords: '',
    wordcount: '',
    url: '',
    datePublished: '',
    dateCreated: '',
    dateModified: '',
    description: '',
    articleBody: '',
  });

  const onSubmit = () => {
    console.log(Inputs);
    setloading(true);
    DB.post('article', Inputs)
      .then(res => {
        setloading(false);
        props.navigation.goBack();
      })
      .catch(err => {
        setloading(false);
        console.log(err);
      });
  };

  return (
    <AContainer>
      <AappBar
        onBackCustom={() => props.navigation.goBack()}
        title="Article add"
        textColor="#000"
        size={28}
        bordered
      />
      <AContent pd scroll>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AdateTime
              label={'Created date'}
              mode="date"
              isIcon="md-time-outline"
              iconType="Ionicons"
              placeholder={Func.dateFormats(date)}
              onChange={val => setInputs({...Inputs, dateCreated: val})}
              containerStyle={{width: '47%'}}
            />
            <AdateTime
              label={'Modified date'}
              mode="date"
              isIcon="md-time-outline"
              iconType="Ionicons"
              placeholder={Func.dateFormats(date)}
              onChange={val => setInputs({...Inputs, dateModified: val})}
              containerStyle={{width: '47%'}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <AtextInput
              label={'Author'}
              containerStyle={{width: '47%'}}
              value={Inputs.author}
              onChangeText={val => setInputs({...Inputs, author: val})}
            />
            <AdateTime
              label={'Published date'}
              mode="date"
              isIcon="md-time-outline"
              iconType="Ionicons"
              placeholder={Func.dateFormats(date)}
              onChange={val => setInputs({...Inputs, datePublished: val})}
              containerStyle={{width: '47%'}}
            />
          </View>
          <AtextInput
            placeholder="Award"
            value={Inputs.award}
            onChangeText={val => setInputs({...Inputs, award: val})}
          />
          <AtextInput
            placeholder="Article Body"
            value={Inputs.articleBody}
            onChangeText={val => setInputs({...Inputs, articleBody: val})}
          />
          <AtextInput
            placeholder="Context"
            value={Inputs.context}
            onChangeText={val => setInputs({...Inputs, context: val})}
          />
          <AtextInput
            placeholder="Keywords"
            value={Inputs.keywords}
            onChangeText={val => setInputs({...Inputs, keywords: val})}
          />
          <AtextInput
            placeholder="Type"
            value={Inputs.type}
            onChangeText={val => setInputs({...Inputs, type: val})}
          />
          <AtextInput
            placeholder="Url"
            value={Inputs.url}
            onChangeText={val => setInputs({...Inputs, url: val})}
          />
          <AtextInput
            placeholder="Alternative Headline"
            value={Inputs.alternativeHeadline}
            onChangeText={val =>
              setInputs({...Inputs, alternativeHeadline: val})
            }
          />
          <AtextInput
            placeholder="Headline"
            value={Inputs.headline}
            onChangeText={val => setInputs({...Inputs, headline: val})}
          />
          <AtextInput
            placeholder="Word Count"
            value={Inputs.wordcount}
            onChangeText={val => setInputs({...Inputs, wordcount: val})}
          />
          <AtextInput
            placeholder="Genre"
            value={Inputs.genre}
            onChangeText={val => setInputs({...Inputs, genre: val})}
          />
          <AtextInput
            placeholder="Editor"
            value={Inputs.editor}
            onChangeText={val => setInputs({...Inputs, editor: val})}
          />
          <AfileDrag
            multiple
            containerStyle={{alignSelf: 'center', marginVertical: 10}}
            label={'Drag file here to upload'}
            desc={'Max file upload 5'}
            onChange={img => {
              setInputs({...Inputs, image: img[0]});
            }}
          />
          <AtextArea
            placeholder="Description"
            numberLines={10}
            value={Inputs.description}
            onChangeText={val => setInputs({...Inputs, description: val})}
          />
        </View>
        <Abutton title="Submit" textColor="#FFF" onPress={() => onSubmit()} />
      </AContent>

      <ASpinner visible={loading} />
    </AContainer>
  );
}
