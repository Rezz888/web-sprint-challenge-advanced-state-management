import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR";
export const POSTING_SMURFS_START = "POSTING_SMURFS_START";
export const POSTING_SMURFS_SUCCESS = "POSTING_SMURFS_SUCCESS";
export const POSTING_SMURFS_ERROR = "POSTING_SMURFS_ERROR";

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
export const postSmurf = (smurf) => (dispatch) => {
  console.log(`postSmurf() action: ${smurf}`);
  dispatch({ type: POSTING_SMURFS_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log(res);
      dispatch({ type: POSTING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: POSTING_SMURFS_ERROR,
        payload: "We couldn't add a new smurf at this time.",
      });
    });
};