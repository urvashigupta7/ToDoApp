import React from "react";
import { Filter } from "../types";
import { createUid } from "../utils/index";
import { ACTIVE_FILTER, COMPLETED_FILTER, ALL_FILTER } from "../constants";

const TodoFooter = ({
  filter,
  setFilter
}: {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}) => {
  const onClick = (filterval: string) => {
    const newid = createUid();
    setFilter({ id: newid, text: filterval });
  };
  return (
    <div className="footer">
      <span className="span"
        style={filter.text === ALL_FILTER ? { backgroundColor: "#484a4d" } : {}}
        onClick={() => {
          onClick(ALL_FILTER);
        }}
      >
        All
      </span>
      <span className="span"
        style={
          filter.text === COMPLETED_FILTER ? { backgroundColor: "#484a4d" } : {}
        }
        onClick={() => {
          onClick(COMPLETED_FILTER);
        }}
      >
        Completed
      </span>
      <span className="span"
        style={
          filter.text === ACTIVE_FILTER ? { backgroundColor: "#484a4d" } : {}
        }
        onClick={() => {
          onClick(ACTIVE_FILTER);
        }}
      >
        Not Completed
      </span>
    </div>
  );
};

export default TodoFooter;
