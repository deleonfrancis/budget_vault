import React from "react";

function GuestFilter() {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
          <i class="material-icons prefix">search</i>
            <input id="searchBudgets" type="text" className="" />
            <label htmlFor="searchBudgets">Search</label>
            {/* <span className="text-info" data-error="wrong" data-success="right">
              Search for a budget
            </span> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default GuestFilter;
