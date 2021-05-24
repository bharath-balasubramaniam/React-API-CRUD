import React from "react";
import Data2 from "./Projects_data2";
export const Projectscolor = () => {
  return (
    <>
      {Data2.map((obj) => {
        return (
          <div className="col-lg-6 mb-4">
            <div className={obj.class}>
              <div className="card-body">
                {obj.card_class}
                <div className={obj.text_class}>{obj.text}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
