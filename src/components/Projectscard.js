import Data from "./Projects_data";
export default function Projectscard() {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        {Data.map((obj) => {
          return (
            <>
              <div className="card-body">
                <h4 className="small font-weight-bold">
                  {obj.h4} <span className="float-right">{obj.span_class}</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className={obj.class}
                    role="progressbar"
                    style={{ width: obj.width + "%" }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
