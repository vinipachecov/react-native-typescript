import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../styles/styled/common';
import { PostI } from 'services/PostService';
import PostItem from './PostItem';
import { ListSeparator } from '../ListSeparator';

interface PostListProps {
  data: PostI[];
  onFetchPosts: Function;
}

const PostList = ({ data, onFetchPosts }: PostListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={PostItem}
      ItemSeparatorComponent={ListSeparator}
      ListFooterComponent={
        <Button title={'Load more posts'} onPress={() => onFetchPosts()} />
      }
    />
  );
};

export default PostList;
