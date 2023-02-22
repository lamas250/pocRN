import React from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  const uri = 'https://www.joinplank.com/';

  const handleRedirect = () => {
    Linking.openURL(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Join Plank</Text>
      <View>
        <Button onPress={handleRedirect} title="joinplank.com" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#363636',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default App;
