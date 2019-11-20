import React, { useEffect } from 'react';
import { Button } from '../../styles/styled/common';
import { Text, FlatList, View } from 'react-native';
import withPosts from '../../containers/posts';
import { ScreenCprops } from '../../interfaces/ScreenProps';

export function C(props: ScreenCprops) {
  useEffect(() => {
    props.getPosts();
  }, []);
  return (
    <FlatList
      data={props.posts.postList}
      renderItem={({ item }) => (
        <View>
          <Text>123</Text>
        </View>
      )}
      ListFooterComponent={
        <Button
          title={'Load more posts'}
          onPress={() => console.log('loading more posts')}
        />
      }
    />
  );
}

export default withPosts(C);
