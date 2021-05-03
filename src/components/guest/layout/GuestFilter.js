import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchBudgets } from "../../../actions/budgetActions";

function GuestFilter({ searchBudgets }) {
  const text = useRef("");

  const onChange = () => {
    searchBudgets(text.current.value);
  };
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input
              id="searchBudgets"
              type="text"
              className=""
              onChange={onChange}
              ref={text}
            />
            <label htmlFor="searchBudgets">Search</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { searchBudgets })(GuestFilter);
