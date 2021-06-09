import React from "react";
import { connect } from "react-redux";
import { setTitle } from "../../../actions/userMainActions";

function UserAskTitle({ userMain: { title }, setTitle}) {
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
          <div className="row">
            <div
              style={{ width: "100%", margin: "auto" }}
              className="input-field col s12"
            >
              <i className="material-icons prefix teal-text">
                drive_file_rename_outline
              </i>
              <input
                name="title"
                id="guestTitleInput"
                type="text"
                className=""
                style={{ color: "black" }}
                onChange={handleChange}
                value={title}
              />
              <label htmlFor="guestTitleInput">Budget Name</label>
            </div>
          </div>
  );
}

const mapStateToProps = (state) => ({
  userMain: state.userMain,
});

export default connect(mapStateToProps, { setTitle })(UserAskTitle);
