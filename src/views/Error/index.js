import React from "react";

//App
import { MainLayout } from "../../layouts";

//Styles
import "./Error.scss";

function Error() {
  return (
    <MainLayout>
      <div className="error-page">404 - Page not found</div>
    </MainLayout>
  );
}

export default Error;
