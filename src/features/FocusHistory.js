import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { colors } from '../utils/colors';
import { spacing, fontSizes } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}> You haven't focused on anything yet. </Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>✓ {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you've focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
    paddingLeft: spacing.lg,
  },
  item: {
    color: colors.blueGrey,
    paddingTop: spacing.md,
    fontSize: fontSizes.md,
  },
  title: {
    color: colors.blueGrey,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
