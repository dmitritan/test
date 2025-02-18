const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
