import React from "react";

const EnviromentVariable = () => {
  console.log(process.env.GOOGLEAPIKEY);
  return (
    <>
      <h1>Environment Variable Page</h1>
      {process.env.NODE_ENV == "development"
        ? "Development Mode"
        : "Production Mode"}
    </>
  );
};

export default EnviromentVariable;
