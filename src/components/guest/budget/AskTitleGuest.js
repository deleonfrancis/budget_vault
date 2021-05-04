import React from "react";
import { connect } from "react-redux";
import { setTitle } from "../../../actions/mainActions";

function AskTitleGuest({ guestMain: { title }, setTitle}) {
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="row">
      <h4 className="center-align teal-text" style={{ marginBottom: "50px" }}>
        Compose a budget!
      </h4>
      <div className="">
        <form className="col s12">
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
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestMain: state.guestMain,
});

export default connect(mapStateToProps, { setTitle })(AskTitleGuest);
