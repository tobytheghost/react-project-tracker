import React from "react";
import { Nav } from "../../components";

//Styles
import "./Page.scss";

function Page({ children }) {
  return (
    <div className="page">
      <div className="page__sidebar">
        <Nav />
      </div>
      <div className="page__body page__body--sidebar">{children}</div>
    </div>
  );
}

export default Page;
