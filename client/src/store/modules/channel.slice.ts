/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { JoinUser, Channel } from '@/types';

interface ChannelState {
  channelList: Channel[];
  myChannelList: Channel[];
  current: Channel | null;
  users: JoinUser[];
  channelId: number | null;
}

const initialState: ChannelState = {
  channelList: [],
  myChannelList: [],
  current: null,
  users: [],
  channelId: null,
};

export interface modifyLastChannelRequestPayload {
  lastChannelId: number;
  userId: number;
}

export interface modifyTopicChannelRequestPayload {
  channelId: number;
  topic: string;
}

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    loadChannelsRequest() {},
    loadChannelsSuccess(state, action) {
      state.channelList = action.payload.channelList;
    },
    loadChannelsFailure(state, action) {
      // todo 에러처리
    },
    loadMyChannelsRequest(state, action) {},
    loadMyChannelsSuccess(state, action) {
      state.myChannelList = action.payload.joinChannelList;
    },
    loadMyChannelsFailure(state, action) {
      // todo 에러처리
    },
    loadChannelRequest(state, action) {
      state.channelId = action.payload;
    },
    loadChannelSuccess(state, action) {
      const [temp] = action.payload.channel;
      state.current = temp;
      state.users = action.payload.users;
    },
    loadChannelFailure(state, action) {
      // todo 에러처리
    },
    modifyTopicRequest(state, action) {},
    modifyTopicSuccess(state, action: PayloadAction<{ channelId: number }>) {},
    modifyTopicFailure(state, action) {},
    modifyLastChannelRequest(state, action: PayloadAction<modifyLastChannelRequestPayload>) {},
    modifyLastChannelSuccess() {},
    modifyLastChannelFailure(state, action) {},
    createChannelRequest(state, action) {},
    createChannelSuccess(state, action) {
      state.channelList.push(action.payload.channel);
      state.myChannelList.push(action.payload.channel);
      state.current = action.payload.channel;
      state.users = [action.payload.joinUser];
    },
    createChannelFailure(state, action) {
      // todo 에러처리
    },
    joinChannelRequset(state, action) {},
    joinChannelSuccess(state, action) {},
    joinChannelFailure(state, action) {
      // todo 에러처리
    },
    setCurrent(state, action: PayloadAction<{ name: string; value: string }>) {
      if (state.current !== null) {
        if (action.payload.name === 'topic') {
          state.current.topic = action.payload.value;
        }
      }
    },
  },
});

export const CHANNEL = channelSlice.name;
export const {
  loadChannelsRequest,
  loadChannelsSuccess,
  loadChannelsFailure,
  loadMyChannelsRequest,
  loadMyChannelsSuccess,
  loadMyChannelsFailure,
  loadChannelRequest,
  loadChannelSuccess,
  loadChannelFailure,
  modifyTopicRequest,
  modifyTopicSuccess,
  modifyTopicFailure,
  modifyLastChannelRequest,
  modifyLastChannelSuccess,
  modifyLastChannelFailure,
  createChannelRequest,
  createChannelSuccess,
  createChannelFailure,
  joinChannelRequset,
  joinChannelSuccess,
  joinChannelFailure,
  setCurrent,
} = channelSlice.actions;
export default channelSlice.reducer;