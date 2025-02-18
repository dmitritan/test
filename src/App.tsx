import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";
import { AppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: any) => state.data);
  const error = useSelector((state: any) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {error && <div>Error: {JSON.stringify(error, null, 2)}</div>}
      {!data && <div>Loading...</div>}
      {data && (
        <>
          <h1>Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default App;
