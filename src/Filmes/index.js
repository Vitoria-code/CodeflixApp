import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({data}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.title}</Text>

        <Image
          style={styles.capa}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
          }}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setVisibleModal(true)}>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    elevation: 5,
    backgroundColor: '#FFF',
  },
  capa: {
    height: 220,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    color: '#121212',
  },
  areaBtn: {
    alignItems: 'flex-end',
    marginTop: -40,
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    padding: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    opacity: 1,
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center',
  },
});
