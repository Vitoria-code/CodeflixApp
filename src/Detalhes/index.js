import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from 'react-native';

export default function Detlhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={styles.textoVoltar}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.containerCapa}>
          <Image
            style={styles.capa}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${props.filme.poster_path}`,
            }}></Image>
        </View>

        <Text style={styles.titulo}> {props.filme.title}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filme.overview}</Text>
        <Text style={styles.avaliacao}>
          Avaliação: {''}
          {parseInt(props.filme.vote_average)} /10
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  modalContainer: {
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  containerCapa: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  capa: {
    width: 180,
    height: 250,
    marginVertical: 10,
  },
  btnVoltar: {
    backgroundColor: '#E52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textoVoltar: {
    color: '#FFF',
    fontSize: 17,
  },
  titulo: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 10,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  descricao: {
    color: '#FFF',
    marginHorizontal: 10,
  },
  avaliacao: {
    fontSize: 17,
    color: '#FFF',
    margin: 8,
  },
});
