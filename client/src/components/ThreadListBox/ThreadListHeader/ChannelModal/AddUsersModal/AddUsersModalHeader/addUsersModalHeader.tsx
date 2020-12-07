/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import { flex } from '@/styles/mixin';
import { useChannelState } from '@/hooks';

const Header = styled.div`
  ${flex('center', 'flex-start', 'column')};
`;

const HeaderTitle = styled.div`
  font-size: ${(props) => props.theme.size.l};
`;

const ChannelName = styled.div`
  font-size: ${(props) => props.theme.size.s};
`;

interface AddUsersModalHeaderProps {
  first: boolean;
}

const AddUserModalHeader: React.FC<AddUsersModalHeaderProps> = ({
  first,
}: AddUsersModalHeaderProps) => {
  const { current } = useChannelState();

  return (
    <Header>
      <HeaderTitle>Add People</HeaderTitle>
      <ChannelName>
        {!first && current?.isPublic}
        {!first && current?.name}
      </ChannelName>
    </Header>
  );
};

export default AddUserModalHeader;
