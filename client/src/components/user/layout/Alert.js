import React from 'react'
import {connect} from "react-redux";

function Alert({alerts}) {
    return (
        alerts.length > 0 && alerts.map((alert) => ( 
            <div key={alert.id} className={`alert red lighten-3`}>
            <i className="fas fa-info-circle">{alert.msg}</i>
            </div>
         ) )
    )
}

const mapStateToProps = (state) => ({
    alerts: state.alertReducer,
  });

export default connect(mapStateToProps)(Alert)
