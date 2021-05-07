import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { searchBudgets } from "../../../actions/budgetActions";

function GuestFilter({ searchBudgets, guestBudget:{filtered} }) {
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

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

const mapStateToProps = (state) => ({
  guestBudget: state.guestBudget
})

export default connect(mapStateToProps, { searchBudgets })(GuestFilter);
