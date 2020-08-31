import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_ERROR,
    POSTING_SMURFS_START,
    POSTING_SMURFS_SUCCESS,
    POSTING_SMURFS_ERROR
  } from "../actions";

const initialState = 
    {
        smurfs: [],
        isFetching: false,
        isPosting: false,
        error: ""  
        
    };

  export const smurfReducer = (state = initialState, action ) => {

    switch(action.type){
        case FETCHING_SMURFS_START:
            console.log("fetching smurfs");
            return {
              ...state,
              isFetching: true
            };
        case FETCHING_SMURFS_SUCCESS:
          const newSmurfs = action.payload;
            return {
              ...state, 
              smurfs: newSmurfs, isFetching: false, error: ""};
        case FETCHING_SMURFS_ERROR:
            return {
                ...state, 
                    error: action.payload, isFetching: false
            }
            case POSTING_SMURFS_START:
              return { ...state, isPosting: true };
            case POSTING_SMURFS_SUCCESS:
              return { ...state, isPosting: false, smurfs: action.payload, error: "" };
            case POSTING_SMURFS_ERROR:
              return { ...state, error: action.payload };

            default:
              return state;

    }
  }