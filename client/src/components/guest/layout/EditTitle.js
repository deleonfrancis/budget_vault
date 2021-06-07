import React from "react";
import { connect, useDispatch } from "react-redux";
import { setTitle } from "../../../actions/mainActions";

function EditTitle({
  guestMain: {
    title,
  },
}) {

    const dispatch = useDispatch()

  const handleNameChange = (event) => {
    dispatch(setTitle(event.target.value))
    // console.log(event.target.value);
  };

  return (
    <div className="input-field">
    {/* <input
        id="editTitle"
        type="text"
        className="validate right-align"
        onChange={handleNameChange}
        name="editTitle"
        value={title}
        style={{width:"80%"}}
      /> */}
      <div className="left"><h5 className="teal-text">Title: </h5></div>
      <div className="" style={{margin:"0px 0px 30px 80px"}}><input
        id="editTitle"
        type="text"
        className="validate"
        onChange={handleNameChange}
        name="editTitle"
        value={title}
        style={{width:"80%"}}
      /></div>
      
      
      {/* <div className="center-align"><input
        id="editTitle"
        type="text"
        className="validate"
        onChange={handleNameChange}
        name="editTitle"
        value={title}
        style={{width:"80%"}}
      /></div> */}
      
    
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(EditTitle);
