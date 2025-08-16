import { View, Text, Button, StyleSheet,Image } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.titulo}>O Passado de Glover</Text>
      <Image 
              source={require('../img/livro.png')}
              style={style.imagem}  
            />
      <Text style={style.texto}>Em uma pequena cidade, chamada Glover, cercada por montanhas, um jovem descobre um segredo guardado há gerações: um mapa que pode mudar o destino de todos ao seu redor. Entre amizades inesperadas, mistérios do passado e escolhas difíceis, ele precisará encontrar coragem para enfrentar verdades que jamais imaginou.</Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Ir para Sobre" onPress={() => navigation.navigate('About')} />
    </View>
  );
}
const style = StyleSheet.create({
  texto:{
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 25,
  },
  titulo:{
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center'
  },
  imagem: {
      width: 300,
      height: 450,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#485834'
    },
})