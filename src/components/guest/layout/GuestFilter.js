import React, { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { clearFilter, searchBudgets } from "../../../actions/budgetActions";

function GuestFilter({ searchBudgets, guestBudget: { filtered, budgets } }) {
  const text = useRef("");
  
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (text.current.value !== ""){
      searchBudgets(e.target.value);
      // searchBudgets(text.current.value);
    }else{
      dispatch(clearFilter())
    }
  };
  return (
    <div className="row">
      {budgets.length > 1 && <form className="col s12">
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
      </form>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  guestBudget: state.guestBudget,
});

export default connect(mapStateToProps, { searchBudgets })(GuestFilter);
