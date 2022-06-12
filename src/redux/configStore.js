// redux tool kit으로 스토어 만들기
// create store 대신 configStore 만들기
import {configureStore} from "@reduxjs/toolkit";
import bucketReducer from "./modules/bucketSlice";
// slice에서 리듀서를 불러와서 넣어줌
const store = configureStore({reducer: {
    bucket: bucketReducer
  }});
export default store;