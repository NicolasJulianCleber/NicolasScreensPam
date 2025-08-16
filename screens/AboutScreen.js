import { View, Text, Button, StyleSheet, Image, ImageComponent } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.titulo}>Sobre o autor</Text>
      <Image 
        source={require('../img/cara.jpeg')}
        style={style.imagem}  
      />
      <Text style={style.texto}>Lucas Andrade é um escritor brasileiro nascido em 1985, apaixonado por contar histórias que exploram o lado humano de seus personagens. Desde criança, cultivou o hábito da leitura e, aos 12 anos, já escrevia pequenas crônicas inspiradas nas conversas de família e nos causos que ouvia no interior de Minas Gerais. Com formação em Letras e experiência como roteirista, Lucas mistura elementos de drama, humor e reflexão em suas obras, sempre buscando criar narrativas que façam o leitor se reconhecer nos conflitos e sonhos dos protagonistas. Seu romance de estreia, Entre o Sol e a Chuva, foi elogiado pela crítica por sua sensibilidade e profundidade emocional.</Text>
      <Text style={style.informacoes}>E-Mail para contato: lucasandrade85@gmail.com      Telefone comercial:11 98426-7745 </Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Ir para ultimo lançamento" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
const style = StyleSheet.create({
    texto: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 25,
      borderRadius: 50
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D4B191'
    },
    imagem: {
      width: 300,
      height: 300,
      borderRadius: 500
    },
    titulo:{
      fontSize: 40
    },
    informacoes:{
      fontSize: 20
    }
  });