import React from "react";

export default function RUbuttons() {
  return (
    <div className="d-grid gap-3 my-3 mx-5">
      <button className="btn btn-secondary" type="button">
        Redo
      </button>
      <button className="btn btn-success" type="button">
        Undo
      </button>
    </div>
  );
}
