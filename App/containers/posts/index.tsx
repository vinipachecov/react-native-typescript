import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppProps } from '../../interfaces/AppProps';
import { postActions } from '../../redux/ducks/post';
import { ScreenDefaultProps } from '../../interfaces/ScreenProps';

const withPosts = (WrappedComponent: Function) => {
  const mapStateToProps = (state: AppProps) => {
    return {
      posts: state.posts,
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    dispatch,
    ...bindActionCreators(postActions, dispatch),
  });

  const PostComponent = (props: ScreenDefaultProps) => (
    <WrappedComponent {...props} />
  );

  return connect(mapStateToProps, mapDispatchToProps)(PostComponent);
};

export default withPosts;
