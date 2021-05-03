import React from "react";

function AskTitleGuest({ title, setTitle }) {

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
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(title)
                }}
                value={title}
              />
              <label htmlFor="guestTitleInput">Budget Name</label>
            </div>
          </div>
          {/* <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            disabled={title === ""}
          >
            Next
            <i className="material-icons right">navigate_next</i>
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default AskTitleGuest;
