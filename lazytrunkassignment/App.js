import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Switch, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DeckScreen from './DeckScreen'; // Import the new DeckScreen component


const { width, height } = Dimensions.get('window');
const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background-pattern.png')}
        style={styles.backgroundImage}
      >
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings-outline" size={24} color="#ffffff" />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.neverText}>NEVER</Text>
          <Text style={styles.haveText}>HAVE I</Text>
          <Text style={styles.everText}>EVER</Text>
        </View>

        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Deck')}>
          
            <Image
              source={require('./assets/play.png')}
              style={styles.dirtyImage}
              resizeMode="contain"
            />
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
              source={require('./assets/multiplayer.png')}
              style={styles.dirtyImage}
              resizeMode="contain"
            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
              source={require('./assets/howtoplay.png')}
              style={styles.dirtyImage}
              resizeMode="contain"
            />
        </TouchableOpacity>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.bottomButton}>
            <Ionicons name="rocket-outline" size={20} color="#ffffff" />
            <Text style={styles.bottomText}>FOLLOW US</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Ionicons name="game-controller-outline" size={20} color="#ffffff" />
            <Text style={styles.bottomText}>MORE GAMES</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const SettingsScreen = () => {
  const [isKidModeEnabled, setIsKidModeEnabled] = React.useState(false);
  const toggleKidMode = () => setIsKidModeEnabled(previousState => !previousState);

  return (
    <View style={styles.settingsContainer}>
      <ImageBackground
        source={require('./assets/background-pattern.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.settingsHeader}>
          <Ionicons name="settings-outline" size={24} color="#ffffff" />
          <Text style={styles.settingsHeaderText}>SETTINGS</Text>
        </View>

        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="musical-note" size={30} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton2}>
          <Ionicons name="information-circle-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
<View>
        <TouchableOpacity style={[styles.settingsOption, styles.languageOption]}>
          <Text style={styles.optionText}>Languages</Text>
          <View style={styles.optionRight}>
            <Text style={styles.optionText}>Eng (US)</Text>
            <Ionicons name="flag" size={24} color="#000000" />
            <Ionicons name="chevron-forward" size={24} color="#000000" />
          </View>
        </TouchableOpacity>

        <View style={[styles.settingsOption, styles.kidModeOption]}>
          <View style={styles.optionLeft}>
            <Ionicons name="star" size={40} color="#000000" />
            <Text style={[styles.optionText, {marginHorizontal: 5} ]}>Kid Mode</Text>
          </View>
          <View style={styles.optionRight}>
            <Text style={[styles.optionText, {marginHorizontal: 15} ]}>{isKidModeEnabled ? 'On' : 'Off'}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isKidModeEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleKidMode}
              value={isKidModeEnabled}
            />
          </View>
        </View>

        <TouchableOpacity style={[styles.settingsOption, styles.purchasesOption]}>
        <Ionicons name="logo-usd" size={40} color="#000000" />
          <Text style={styles.optionText}>Purchases</Text>
          <Ionicons name="chevron-forward" size={24} color="#000000" />
        </TouchableOpacity></View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.bottomButton}>
            <Ionicons name="game-controller-outline" size={20} color="#ffffff" />
            <Text style={styles.bottomText}>More Games</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Ionicons name="rocket-outline" size={20} color="#ffffff" />
            <Text style={styles.bottomText}>Follow Us</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Deck" component={DeckScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001234',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    position: 'absolute',
    top: height * 0.05,
    right: width * 0.05,
    padding: 10,
  },
  header: {
    marginTop: height * 0.001,
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  neverText: {
    fontSize: 40,
    color: '#7fff00',
    fontWeight: 'bold',
  },
  haveText: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  everText: {
    fontSize: 40,
    color: '#ff6347',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    
    width: width * 0.8,
    height: 90,
    borderRadius: 30,
    
  },
  
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    position: 'absolute',
    bottom: 40,
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  bottomText: {
    color: '#ffffff',
    fontSize: 12,
    marginLeft: 5,
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: '#001234',
  },
  settingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#001C37',
    top: height * -0.15,
  },
  settingsHeaderText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  settingsButton: {
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.1,
    padding: 10,
    backgroundColor: '#001C37',
    borderRadius: 30,
  },
  settingsButton2: {
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.8,
    padding: 10,
    backgroundColor: '#001C37',
    borderRadius: 330,
  },
  settingsOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.9,
    height: 90,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  languageOption: {
    backgroundColor: '#7fff00',
  },
  kidModeOption: {
    backgroundColor: '#ff6347',
    width: width * 0.8
  },
  purchasesOption: {
    backgroundColor: '#40e0d0',
    width: width * 0.7,
  },
  optionText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dirtyImage:{
    flex: 1,
  },
});

export default App;