import React from "react";

function ModifyBudget() {
  return (
    <div className="row">
      <div className="input-field">
        <input id="icon_prefix" type="text" class="validate" />
        <label for="icon_prefix">Modify Budget</label>
        <span className="helper-text " data-error="wrong" data-success="right">
          Example: 300.00
        </span>
      </div>
      <div className="center-align">
        <a href="#!" style={{marginRight:"15px"}}>
          <i style={{fontSize:"35px"}} className="material-icons prefix green-text">add</i>
        </a>
        <a href="#!">
          <i style={{fontSize:"35px"}} className="material-icons prefix red-text">remove</i>
        </a>
      </div>
    </div>
  );
}

export default ModifyBudget;
