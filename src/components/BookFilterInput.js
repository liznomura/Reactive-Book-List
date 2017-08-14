import React from 'react';

const FilterInput = ({ setFilter }) =>
  <input type="text" placeholder="Search" onChange={setFilter} />;

export default FilterInput;
