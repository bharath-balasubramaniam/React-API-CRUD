import React from "react";
function DashboardCard(props) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={props.place.card_class}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {props.place.head}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.place.number}
              </div>
            </div>
            <div className="col-auto">
              <i className={props.place.i_class}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardCard;
