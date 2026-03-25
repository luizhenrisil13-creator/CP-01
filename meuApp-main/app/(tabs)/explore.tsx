import React from 'react';
import { ScrollView } from 'react-native';
import MenuItemCard from '../../components/MenuItemCard';
import { useOrder } from '../../context/OrderContext';

export default function ExploreScreen() {
  const { addItem } = useOrder();

  function handleAddItem(name: string, price: number) {
    addItem({ name, price });
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0b0b0b', padding: 20 }}>
      <MenuItemCard
        name="Combo Café + Pão de Queijo"
        price="R$ 12,00"
        onAdd={() => handleAddItem('Combo Café + Pão de Queijo', 12)}
      />
      <MenuItemCard
        name="Sanduíche Natural"
        price="R$ 15,00"
        onAdd={() => handleAddItem('Sanduíche Natural', 15)}
      />
      <MenuItemCard
        name="Suco Natural"
        price="R$ 8,00"
        onAdd={() => handleAddItem('Suco Natural', 8)}
      />
      <MenuItemCard
        name="Salgado + Refrigerante"
        price="R$ 14,00"
        onAdd={() => handleAddItem('Salgado + Refrigerante', 14)}
      />
    </ScrollView>
  );
}