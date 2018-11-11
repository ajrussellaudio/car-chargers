import React from "react";

const Select = ({ data, filterKey, parentKey, addFilter, removeFilter }) => (
  <div className="field">
    <div className="control">
      <div className="select">
        <select
          name={`${filterKey}-select`}
          id={`${filterKey}-select`}
          defaultValue="default"
          onChange={event => {
            if (!event.target.value) {
              removeFilter(parentKey || filterKey);
            } else {
              parentKey
                ? addFilter({
                    [parentKey]: [{ [filterKey]: event.target.value }]
                  })
                : addFilter({ [filterKey]: event.target.value });
            }
          }}
        >
          <option value="default" disabled>
            Select a {filterKey}
          </option>
          <option value="">No preference</option>
          {data.map(datum => (
            <option key={datum} value={datum}>
              {datum}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default Select;
