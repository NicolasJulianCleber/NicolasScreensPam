import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.titulo}>Entre o Sol e Chuva</Text>
      <Image 
              source={require('../img/livro2.png')}
              style={style.imagem}  
            />
      <Text style={style.texto}>Entre o sol e a chuva, existem momentos que definem quem realmente somos. Neste romance, acompanhamos a jornada de Clara, uma jovem que vive dividida entre os dias de esperança iluminados pelo sol e as tempestades emocionais que insistem em nublar seu coração. Em meio a encontros inesperados, perdas dolorosas e escolhas que parecem maiores do que ela mesma, Clara descobre que a vida é feita do equilíbrio entre luz e sombra. Uma história sobre coragem, amor e a força que nasce quando aprendemos a caminhar mesmo sob a chuva.</Text>
      <Button title="Ir para ultimo lançamento" onPress={() => navigation.navigate('Details')} />
      <Button title="Ir para sobre" onPress={() => navigation.navigate('About')} />
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
  imagem:{
    width: 300,
    height: 410,
  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ED9815'
    },
})