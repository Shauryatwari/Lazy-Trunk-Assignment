import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Switch,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MARGIN = 20;
const IMAGE_WIDTH = SCREEN_WIDTH - 2 * MARGIN;

const { width, height } = Dimensions.get('window');

const DeckScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background-pattern.png')}
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.settingsIcon}>
            <Ionicons name="settings-outline" size={24} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoIcon}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.deckContainer}>
          <View style={styles.header2}>
            <Text style={styles.headerText}>CHOOSE DECK</Text>
          </View>
          <View style={styles.deckRow}>
            <View style={styles.deckItemContainer}>
              <TouchableOpacity style={styles.deckItem}>
                <Image
                  source={require('./assets/party-and-fun.png')}
                  style={styles.deckImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>PLAY</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.deckItemContainer}>
              <TouchableOpacity style={styles.deckItem}>
                <Image
                  source={require('./assets/party-and-fun.png')}
                  style={styles.deckImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playButtonText}>PLAY</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.deckItemContainer}>
              <TouchableOpacity style={styles.deckItem}>
                <Image
                  source={require('./assets/party-and-fun.png')}
                  style={styles.deckImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>BUY NOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.premiumDecksContainer}>
          <TouchableOpacity style={styles.premiumDecksButton}>
            <Image
              source={require('./assets/dirty.png')}
              style={styles.dirtyImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
<Text style={styles.filtersTitle}>FILTERS</Text>
        <ScrollView style={styles.filtersContainer}>
          
          <View style={styles.filterItem}>
            <Image
              source={require('./assets/funny.png')}
              style={styles.filterIcon}
            />
            <Text style={styles.filterText}>FUNNY</Text>
            <Text style={styles.cardCount}>110 CARDS</Text>
            <Switch />
          </View>
          <View style={styles.filterItem1}>
            <Image
              source={require('./assets/awkward.png')}
              style={styles.filterIcon}
            />
            <Text style={styles.filterText}>AWKWARD</Text>
            <Text style={styles.cardCount}>70 CARDS</Text>
            <Switch />
          </View>
          <View style={styles.filterItem2}>
            <Image
              source={require('./assets/adult.png')}
              style={styles.filterIcon}
            />
            <Text style={styles.filterText}>ADULT</Text>
            <Text style={styles.cardCount}>90 CARDS</Text>
            <Switch />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  infoIcon: {
    position: 'absolute',
    top: height * 0.05,
    right: width * 0.05,
    padding: 10,
  },
  settingsIcon: {
    position: 'absolute',
    top: height * 0.05,
    left: width * 0.05,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#001234',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 50,
  },
  deckContainer: {
    padding: 10,
  },
  deckRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deckItemContainer: {
    width: '30%',
    alignItems: 'center',
  },
  deckItem: {
    width: '100%',
    aspectRatio: 1,
    
    marginBottom: 15,
  },
  deckImage: {
    width: '100%',
    height: '100%',
    
  },
  deckName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
  },
  playButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  playButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  buyButton: {
    backgroundColor: '#F44336',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  premiumDecksContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  premiumDecksButton: {
    width: IMAGE_WIDTH,
    aspectRatio: 2.5, // Adjust this value to match the aspect ratio of your image
    overflow: 'hidden',
    borderRadius: 10,
  },
  dirtyImage: {
    width: '100%',
    height: '100%',
  },
  filtersContainer: {
    margin: 10,
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7CC163',
    borderRadius: 20,
    padding: 30,
    marginBottom: 10,
  },
  filterItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDB6B8',
    borderRadius: 20,
    padding: 30,
    marginBottom: 10,
  },
  filterItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B4CF5C',
    borderRadius: 20,
    padding: 30,
    marginBottom: 10,
  },
  filterIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  filterText: {
    color: '#ffffff',
    fontWeight: 'bold',
    flex: 1,
  },
  cardCount: {
    color: '#ffffff',
    marginRight: 10,
  },
});

export default DeckScreen;
