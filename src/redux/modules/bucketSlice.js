import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// slice 생성하기

// createAsyncThunk 생성하기
export const loadBucket = createAsyncThunk(
  // action 이름
  "load/Bucket",
  // 처리할 비동기 함수
  async () => {
    // 서버에서 데이터를 불러옴
    const res = await axios.get("http://localhost:5008/bucket");
    // action의 payload 리턴
    return res.data;
  }
);

const bucketSlice = createSlice({
  name: "bucket",
  initialState: {list: []},
  reducers: {},
  // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
  extraReducers: {
    [loadBucket.pending]: (state, action) => {
      console.log('pending');
    },
    // fullflled 되었을 때, 서버에서 받아온 데이터를 state에 넣어줌!
    // 첫번째 파라미터는 redux의 state이고 두번째 파라미터는 action
    [loadBucket.fulfilled]: (state, action) => {
      state.list = action.payload;
      console.log('fulfilled');
    },
    [loadBucket.rejected]: (state, action) => {
      console.log('rejected')
    }
  }

})
export default bucketSlice.reducer;