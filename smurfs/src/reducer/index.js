import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_ERROR
  } from "../actions";

const initialState = [
    {
        isFetching: false,
        error: "",
        smurfs: []
        
        
    }
  ];

  export const smurfReducer = (state = initialState, action ) => {

    switch(action.type){
        case FETCHING_SMURFS_START:
            console.log("fetching smurfs");
            return {
              ...state,
              isFetching: true
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
              ...state, 
              smurfs: action.payload, isFetching: false
            };
        case FETCHING_SMURFS_ERROR:
            return {
                ...state, 
                    error: action.payload, isFetching: false
            }

    }
  }