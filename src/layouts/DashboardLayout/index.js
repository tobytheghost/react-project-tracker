import React from "react";

//App
import { Page, Nav } from "../../components";

function DashboardLayout({ children }) {
  return (
    <Page>
      <div className="page__sidebar">
        <Nav />
      </div>
      <div className="page__body page__body--sidebar">{children}</div>
    </Page>
  );
}

export default DashboardLayout;
