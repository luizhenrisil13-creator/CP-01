import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MenuItemCardProps = {
  name: string;
  price: string;
  onAdd: () => void;
};

export default function MenuItemCard({ name, price, onAdd }: MenuItemCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>

      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1d1d1d',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  name: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  price: {
    color: '#ff7aa5',
    fontSize: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ed145b',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});