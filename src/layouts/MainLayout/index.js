import React from "react";

//App
import { Page } from "../../components";

function MainLayout({ children }) {
  return (
    <Page>
      <div className="page__body">{children}</div>
    </Page>
  );
}

export default MainLayout;
