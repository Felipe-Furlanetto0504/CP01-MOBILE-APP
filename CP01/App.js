import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from './components/form';

export default function App() {
  return (
  <View style={styles.container}>
    <SafeAreaView>
      <Text>Coloque suas informações</Text>
      <Form/>
      <StatusBar style="auto" />
    </SafeAreaView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    
  }
});
