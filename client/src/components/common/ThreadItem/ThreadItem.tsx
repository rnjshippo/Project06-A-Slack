import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getSubThreadRequest } from '@/store/modules/subThread';
import { Thread } from '@/types';
import { useUser } from '@/hooks/useUser';
import { flex } from '@/styles/mixin';

interface ThreadItemProps {
  thread: Thread;
}

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const Button = styled.button`
  ${flex()};
`;

const ThreadItem: React.FC<ThreadItemProps> = ({ thread }: ThreadItemProps) => {
  const { userInfo } = useSelector(useUser);
  const buttonEl = useRef<HTMLButtonElement>(null);

  const dispatch = useDispatch();

  const replyClickEventHandler = () => {
    const parentId = Number(buttonEl.current?.id);
    dispatch(getSubThreadRequest({ parentId }));
  };

  const displaySubProfile = () => {
    // 추후 subThreadUserId 값을 이용해, 채널 멤버의 user 정보를 활용하여 프로필을 뿌려준다.
    const results = [thread.subThreadUserId1, thread.subThreadUserId2, thread.subThreadUserId3];
    return results;
  };

  return (
    <Container>
      <div>{thread.userId}</div>
      <div>{thread.createdAt}</div>
      <div>{thread.content}</div>
      <Button ref={buttonEl} id={String(thread.id)} type="button" onClick={replyClickEventHandler}>
        {displaySubProfile()?.map((subProfile: number | null, index: number) => (
          <div key={index}>{subProfile}</div>
        ))}
        {thread.subCount}replies
      </Button>
    </Container>
  );
};

export default ThreadItem;