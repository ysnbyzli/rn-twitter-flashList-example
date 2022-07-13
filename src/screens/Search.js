import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/search/Header';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.trendContainer}>
        <Text style={styles.trendText}>Trends for you</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>No new trends for you</Text>
        <Text style={styles.contentSubTitle}>
          It seems like there’s not a lot to show you right now, but you can see
          trends for other areas
        </Text>
        <TouchableOpacity style={styles.locationButton}>
          <Text style={styles.locationButtonText}>Change location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  trendContainer: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#CED5DC',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  trendText: {
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    paddingVertical: 32,
    paddingHorizontal: 34,
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
  contentSubTitle: {
    color: '#687684',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  locationButton: {
    backgroundColor: '#4C9EEB',
    height: 34,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  locationButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
