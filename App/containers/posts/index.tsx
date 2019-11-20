import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppProps } from '../../interfaces/AppProps';
import { addPost, removePost, getPosts } from '../../redux/ducks/post';
import { ScreenDefaultProps } from '../../interfaces/ScreenProps';

const withPosts = (WrappedComponent: Function) => {
  const mapStateToProps = (state: AppProps) => {
    return {
      posts: state.posts,
    };
  };

  const PostActions = {
    addPost,
    getPosts,
    removePost,
  };

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatch,
    ...bindActionCreators(PostActions, dispatch),
  });

  const PostComponent = (props: ScreenDefaultProps) => (
    <WrappedComponent {...props} />
  );

  return connect(mapStateToProps, mapDispatchToProps)(PostComponent);
};

export default withPosts;
