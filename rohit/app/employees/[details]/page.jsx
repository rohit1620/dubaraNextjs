import React from "react";

const Details = ({ params }) => {
  return (
    <div>
      <h1>
        This is details page and name is:
        <span style={{ color: "green", backgroundColor: "yellow" }}>
          {params.details}
        </span>
      </h1>
    </div>
  );
};

export default Details;
