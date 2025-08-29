import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, useWindowDimensions } from 'react-native';
import catalogoData from '../catalogo.json';

interface CatalogoItem {
  id: number;
  titulo: string;
  subtitulo: string;
  ano: number;
  imagem?: string;
}

function Card({ titulo, subtitulo, ano, imagem, cardWidth, cardHeight }: CatalogoItem & { cardWidth: number, cardHeight: number }) {
  return (
    <ImageBackground
      source={imagem ? { uri: imagem } : undefined}
      style={[styles.card, { width: cardWidth, height: cardHeight }]}
      imageStyle={styles.cardImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <Text style={styles.cardTitle}>{titulo}</Text>
      <Text style={styles.cardSubtitle}>{subtitulo}</Text>
      <Text style={styles.cardYear}>Ano: {ano}</Text>
    </ImageBackground>
  );
}

export default function CatalogoScreen() {
  const { width } = useWindowDimensions();

  // Define o número de colunas conforme a largura da tela
  const numColumns = width > 600 ? 3 : width > 400 ? 2 : 1;
  // Calcula o tamanho do card para caber nas colunas
  const cardWidth = (width - 32 - (numColumns - 1) * 16) / numColumns;
  const cardHeight = cardWidth * 1.4;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Meus Filmes Favoritos</Text>
      <FlatList
        data={catalogoData}
        renderItem={({ item }) => (
          <Card {...item} cardWidth={cardWidth} cardHeight={cardHeight} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 8,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    borderRadius: 12,
    opacity: 0.7,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
    zIndex: 1,
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#eee',
    marginBottom: 4,
    textAlign: 'center',
    zIndex: 1,
  },
  cardYear: {
    fontSize: 13,
    color: '#ddd',
    textAlign: 'center',
    zIndex: 1,
  },
});