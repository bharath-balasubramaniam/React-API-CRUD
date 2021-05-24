import React from "react";
import Approach from "./Approach";
import Illustrations from "./Illustrations";
import Projectscard from "./Projectscard";
import { Projectscolor } from "./projectscolor";
export default function Projects() {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <Projectscard></Projectscard>
        <div className="row">
          <Projectscolor></Projectscolor>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <Illustrations></Illustrations>
        <Approach></Approach>
      </div>
    </>
  );
}
