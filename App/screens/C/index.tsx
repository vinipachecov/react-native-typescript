import React, { useEffect } from 'react';
import withPosts from '../../containers/posts';
import { ScreenCprops } from '../../interfaces/ScreenProps';
import PostList from '../../components/PostList';

export function C(props: ScreenCprops) {
  useEffect(() => {
    props.getPostListRequest();
  }, []);
  return (
    <PostList
      data={props.posts.postList}
      onFetchPosts={props.getPostListRequest}
    />
  );
}

export default withPosts(C);
