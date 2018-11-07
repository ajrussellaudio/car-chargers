import React from "react";
import PropTypes from "prop-types";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { filterKey, inverse = false, addFilter, removeFilter } = this.props;
    this.setState(
      prevState => ({ checked: !prevState.checked }),
      () => {
        if (this.state.checked) {
          addFilter({ [filterKey]: !inverse });
        } else {
          removeFilter(filterKey);
        }
      }
    );
  }

  render() {
    const { filterKey, text } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={filterKey}>{text}</label>
        <input
          type="checkbox"
          id={filterKey}
          checked={this.state.checked}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

Checkbox.propTypes = {
  filterKey: PropTypes.string,
  text: PropTypes.string,
  inverse: PropTypes.bool,
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func
};

export default Checkbox;
