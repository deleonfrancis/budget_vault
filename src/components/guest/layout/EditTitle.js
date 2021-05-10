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
        // onFocus={(e) =>
        //   (e.target.placeholder = "lodging, flight, shopping, etc")
        // }
        // onBlur={(e) => (e.target.placeholder = "")}
        name="editTitle"
        value={title}
        // onChange={(event) => setExpName(event.target.value)}
      />
      {/* <label htmlFor="expenseName">Title</label> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps)(EditTitle);
