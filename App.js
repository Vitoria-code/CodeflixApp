import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, ActivityIndicator, View} from 'react-native';

import api from './src/services/api';
import Header from './src/Header';
import Filmes from './src/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/movie//now_playing', {
        params: {
          api_key: 'a244b54c7380bc04ee977446ef5d9382',
          language: 'pt-BR',
          page: 1,
        },
      });
      console.log(response.data);
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={filmes}
          renderItem={({item}) => <Filmes data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
