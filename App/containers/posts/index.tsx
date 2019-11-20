import React from 'react';
import { connect } from 'react-redux';
import { AppProps } from '../../interfaces/AppProps';
import {
  addPost,
  removePost,
  getPosts,
  withPostsActions,
} from '../../redux/ducks/post';
import { ScreenDefaultProps } from '../../interfaces/ScreenProps';

const withPosts = (WrappedComponent: Function) => {
  const mapStateToProps = (state: AppProps) => {
    return {
      posts: state.posts,
    };
  };

  const mapDispatchToProps: withPostsActions = {
    getPosts,
    addPost,
    removePost,
  };

  const PostComponent = (props: ScreenDefaultProps) => (
    <WrappedComponent {...props} />
  );

  return connect(mapStateToProps, mapDispatchToProps)(PostComponent);
};

export default withPosts;
