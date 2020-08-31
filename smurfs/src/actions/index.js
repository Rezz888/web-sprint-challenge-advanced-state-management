import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR";

export const getSmurf = () => dispatch => {
    console.log("getSmurf action");
    dispatch({ type: FETCHING_SMURFS_START});
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
          dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
          console.log("API response:", res.data)

      })
      .catch((err)=> {
        dispatch({
            type: FETCHING_SMURFS_ERROR,
            payload: `${err.response.message} code: ${err.response.code}`
          });
          console.log(err);
      })
}