import {loadBucket} from "./redux/modules/bucketSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const App = () => {
  const bucket_list = useSelector(state => state.bucket.list);
  const dispatch = useDispatch();
  useEffect(() => {
    // 서버에서 데이터를 불러오는 createAsyncThunk 호출
    dispatch(loadBucket());
  }, [])
  return (
    <>
      {bucket_list.map((item, index) => (
        <div key={index}>
          {item.text}
        </div>
      ))}
    </>

  );
}

export default App;