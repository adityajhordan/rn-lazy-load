/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import CardComponent from './components/card';
import {CARD_DATA_1, CARD_DATA_2} from './data';

const App = () => {
  const [cards, setCards] = useState(CARD_DATA_1);
  const [maxData, setMaxData] = useState(false);
  const [loading, setLoading] = useState(false);

  /*
    In real case you will use this function to fetch to your endpoint
    offset and limit then you will concat your newest data with the old one,
    delaying the concat process 5s just for showing loading animation
  */
  const concatData = () => {
    if (!maxData) {
      setLoading(true);
      setTimeout(() => {
        setCards([...cards, ...CARD_DATA_2]);
        setMaxData(true);
        setLoading(false);
      }, 1000);
    }
  };

  const renderLoading = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          color="white"
          style={{marginVertical: 10}}
        />
      );
    }

    return null;
  };

  return (
    <FlatList
      data={cards}
      renderItem={CardComponent}
      onEndReached={concatData}
      onEndReachedThreshold={0.2}
      ListFooterComponent={renderLoading}
      keyExtractor={item => item}
    />
  );
};

export default App;
