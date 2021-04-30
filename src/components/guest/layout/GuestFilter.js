import React from "react";

function GuestFilter() {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
            <input id="searchBudgets" type="text" className="" />
            <label htmlFor="searchBudgets">Search</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GuestFilter;
