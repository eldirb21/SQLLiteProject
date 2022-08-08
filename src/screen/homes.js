// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   TextInput,
//   Button,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import {openDatabase} from 'react-native-sqlite-storage';
// import db_query from '../db/db_query';
// import DB from '../db/SQLite';

// export const db = openDatabase({
//   name: 'rn_sqlite',
// });

// export default function Home() {
//   const [category, setCategory] = useState('');
//   const [categories, setCategories] = useState([]);

//   const createTables = () => {
//     DB.createTable('categories', db_query.tbl_user);
//   };

//   const addCategory = () => {
//     if (!category) {
//       alert('Enter category');
//       return false;
//     }
//     var data = {name: category};
//     DB.post('categories', data)
//       .then(response => {
//         getCategories();
//         setCategory('');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const getCategories = () => {
//     DB.getList('categories', 'id')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   const getCategoriesId = () => {
//     var orderBy = {
//       id: 15,
//       // name:'Hallo'
//     };
//     DB.getSingle('categories', orderBy)
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   // function guidGenerator(digits) {
//   //   let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
//   //   let uuid = [];
//   //   for (let i = 0; i < digits; i++) {
//   //     uuid.push(str[Math.floor(Math.random() * str.length)]);
//   //   }
//   //   return uuid.join('');
//   // }
//   // console.log(guidGenerator(32));
//   const onRemove = item => {
//     var data = {id: item};
//     DB.delete('categories', data)
//       .then(response => {
//         getCategories();
//         setCategory('');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   const onUpdate = item => {
//     var data = {id: item.id, name: 'Hallo'};
//     DB.update('categories', data, 'id')
//       .then(response => {
//         getCategories();
//         setCategory('');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   const renderCategory = ({item}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => onRemove(item.id)}
//         // onPress={() => onUpdate(item)}
//         style={{
//           flexDirection: 'row',
//           paddingVertical: 12,
//           paddingHorizontal: 10,
//           borderBottomWidth: 1,
//           borderColor: '#ddd',
//         }}
//       >
//         <Text style={{marginRight: 9}}>{item.id}</Text>
//         <Text>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   useEffect(() => {
//     (async () => {
//       // await createTables();
//       await getCategories();
//       // await getCategoriesId();
//     })();
//   }, []);

//   return (
//     <View>
//       <StatusBar backgroundColor="#222" />

//       <TextInput
//         placeholder="Enter category"
//         value={category}
//         onChangeText={setCategory}
//         style={{marginHorizontal: 8}}
//       />

//       <Button title="Submit" onPress={addCategory} />

//       <FlatList
//         data={categories}
//         renderItem={renderCategory}
//         key={cat => cat.id}
//       />
//     </View>
//   );
// }
