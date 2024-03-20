import { SafeAreaView, Text, StyleSheet, ScrollView, StatusBar, H1 } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>PRINCIPAIS TAGS HTML</Text>

        <Text style={styles.line}></Text>
        <Text style={styles.hh}>h1</Text>
        <Text style={styles.txt}>(Usado para criar titúlos)</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>p</Text>
        <Text style={styles.txt}>(Usado para criar parágrafo)</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>br</Text>
        <Text style={styles.txt}>Usado para quebrar uma linha(Deixar uma linha)</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>hr</Text>
        <Text style={styles.txt}>(Usado para criar uma linha)</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>img</Text>
        <Text style={styles.txt}>Exibir uma image</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>div</Text>
        <Text style={styles.txt}>Define uma divisão</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>ul</Text>
        <Text style={styles.txt}>Cria uma lista não ordenada</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>ol</Text>
        <Text style={styles.txt}>Cria uma lista ordenada</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>li</Text>
        <Text style={styles.txt}>Define um item na lista</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.hh}>table</Text>
        <Text style={styles.txt}>Cria uma tabela</Text>

        <Text style={styles.line1}></Text>
        <Text style={styles.mais}>Mais...</Text>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 29,
    textAlign: 'center',
    fontWeight: '700',
    backgroundColor: '#000',
    color: '#fafafa',
    paddingBottom: 15,
    paddingTop: 15,
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    borderRadius: 10
  },

  scrollView: {
    marginHorizontal: 0,
    backgroundColor: '#000'
  },

  line: {
    width: 510,
    backgroundColor: '#fafafa',
    height:2,
    
  },

  hh: {
    color: '#d25217',
    textAlign: 'center',
    fontSize: 35,
  },

  txt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },

  line1: {
    width: 51000,
    backgroundColor: '#fafafa',
    height:2,
    marginTop: 5
  },

  mais: {
   color: 'gray',
   textAlign: 'center',
   fontSize: 25,
   marginBottom:20,
   marginTop:20

  },

});