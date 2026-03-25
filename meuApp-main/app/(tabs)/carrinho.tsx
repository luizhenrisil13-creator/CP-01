import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useOrder } from '../../context/OrderContext';
import AppHeader from '../../components/AppHeader';

export default function CarrinhoScreen() {
  const { items, total, clearOrder } = useOrder();
  const hasItems = items.length > 0;

  function handlePay() {
    clearOrder();
    alert('Pagamento realizado com sucesso!');
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <AppHeader title="Carrinho" subtitle="Revise seus itens e finalize o pedido." />
      {hasItems ? (
        <>
          {items.map((item, idx) => (
            <View key={idx} style={styles.item}>
              {/* Exemplo de imagem genérica, pode ser customizada por item */}
              <Image source={require('../../assets/images/partial-react-logo.png')} style={styles.image} />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
          <TouchableOpacity style={styles.button} onPress={handlePay}>
            <Text style={styles.buttonText}>Pagar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.empty}>Seu carrinho está vazio.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0b0b' },
  content: { padding: 20, paddingBottom: 30 },
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#181818', borderRadius: 14, marginBottom: 14, padding: 12 },
  image: { width: 48, height: 48, borderRadius: 8, marginRight: 14 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  price: { color: '#ff7aa5', fontSize: 15 },
  total: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 18, marginBottom: 10 },
  button: { backgroundColor: '#ed145b', paddingVertical: 14, borderRadius: 14, alignItems: 'center', marginBottom: 14 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  empty: { color: '#ccc', fontSize: 16, textAlign: 'center', marginTop: 40 },
});
