import React from 'react';
import styled from 'styled-components';
import SubThreadInputBox from '@/components/SubThreadListBox/SubThreadListBox';
import ThreadListHeader from './ThreadListHeader/ThreadListHeader';
import ThreadList from './ThreadList/ThreadList';
import ThreadInputBox from './ThreadInputBox/ThreadInputBox';

const Container = styled.div`
  background-color: pink;
  width: 100%;
`;

const ThreadListBox = () => {
  return (
    <Container>
      <div>BoxTop</div>
      <ThreadListHeader />
      <ThreadList />
      <ThreadInputBox />
      <SubThreadInputBox />
    </Container>
  );
};

export default ThreadListBox;