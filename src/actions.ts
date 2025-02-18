import { Dispatch } from "redux";

export const fetchData = () => {
  return (dispatch: Dispatch) => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        dispatch({ type: "FETCH_DATA_FAILURE", error });
      });
  };
};
