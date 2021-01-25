/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Linking} from 'react-native';

export default class Home extends Component {
  handleOpenURL = (event) => this.navigate(event.url);

  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL()
        .then((url) => {
          console.log('getInitialURL result >>>>> ', url);
          if (url) {
            this.navigate(url);
          }
        })
        .catch((error) => {
          console.log('error >>>>>> ', error);
        });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  navigate = (url) => {
    const {navigate} = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const id = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];

    if (routeName === 'people') {
      navigate('People', {id, name: 'chris'});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import React, {useState, useEffect} from 'react';
// import {View, Text, FlatList, TouchableOpacity} from 'react-native';
//
// function Home() {
//   const [data, setData] = useState([]);
//
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setData(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//
//   const Separator = () => (
//     <View
//       style={{
//         borderBottomColor: '#d3d3d3',
//         borderBottomWidth: 1,
//         marginTop: 10,
//         marginBottom: 10,
//       }}
//     />
//   );
//
//   return (
//     <View style={{flex: 1}}>
//       <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item.id.toString()}
//           ItemSeparatorComponent={Separator}
//           renderItem={({item}) => (
//             <TouchableOpacity onPress={() => alert('Nav to details screen')}>
//               <Text style={{fontSize: 24}}>{item.name}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// }
//
// export default Home;
