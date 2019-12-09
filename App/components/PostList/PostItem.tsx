import React from 'react';
import { StyledText, StyledView } from '../../styles/styled/common';
import { PostI } from 'services/PostService';

interface PostItem {
  item: PostI;
}

const PostItem = ({ item }: PostItem) => {
  return (
    <StyledView key={item.id} width="100%" p="8px">
      <StyledText mb={10} fontWeight={500} fontSize={16}>
        {item.title}
      </StyledText>
      <StyledText>{item.body}</StyledText>
      <StyledText></StyledText>
    </StyledView>
  );
};

export default PostItem;
