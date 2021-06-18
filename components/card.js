import React from 'react';
import {Text, View} from 'react-native';

const Card = ({item}) => {
  return (
    <View
      style={{
        width: '90%',
        marginHorizontal: 24,
        alignSelf: 'center',
        height: 100,
        backgroundColor: 'red',
        marginVertical: 10,
      }}>
      <Text>This is a card no {item}</Text>
    </View>
  );
};

export default Card;
