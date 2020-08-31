import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const Smurfs = ({ getSmurf, smurfs, isFetching }) => {
    // Hit the API after the component mounts
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }


  return (
      <>
      <h1> Welcome to the village where the Smurfs live</h1>
      <ul>

          {smurfs.map((smurf)=> {
              return (
                <li key={smurf.id}>

                  <h4>Name: {smurf.name}</h4>
                  <h4>Age: {smurf.age}</h4>
                  <h4>Height: {smurf.height}</h4>
              
              </li>
              )
              
            })}
      </ul>
      </>
  )

}

const mapStateToProps = (state) => {
    return { smurfs: state.smurfs, isFetching: state.isFetching };
 };
 
 const mapDispatchToProps = { getSmurf };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);