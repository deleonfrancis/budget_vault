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
      <i className="material-icons prefix center-align teal-text">title</i>
      <input
        id="editTitle"
        type="text"
        className="validate"
        onChange={handleNameChange}
        name="editTitle"
        value={title}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(EditTitle);
