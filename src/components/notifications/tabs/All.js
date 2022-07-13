import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {all} from '../../../dummyData/allNotifications';
import AllItem from '../AllItem';

const All = () => {
  const [isFetching, setIsFetching] = useState(false);

  const onRefresh = () => {
    setIsFetching(true);
    setTimeout(() => setIsFetching(false), 3000);
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={all}
        keyExtractor={item => item.id}
        renderItem={({item}) => <AllItem item={item} />}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: '#CED5DC', opacity: 0.5}} />
        )}
        onRefresh={onRefresh}
        refreshing={isFetching}
      />
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {flex: 1},
});
