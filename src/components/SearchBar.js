import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchWeather } from "../action";
// Search component
class SearchBar extends React.Component {
  // calling the action creator on submit
  onSubmit = (fieldValue) => {
    this.props.fetchWeather(fieldValue.city);
  };
  render() {
    return (
      <div>
        <h1>Enter city name or zipcode:</h1>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="field four wide">
            <Field
              name="city"
              component="input"
              type="text"
              placeholder="Enter city or zipcode"
            />
          </div>
          <button className="primary ui button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

SearchBar = connect(null, { fetchWeather })(SearchBar);
export default reduxForm({
  form: "contact",
})(SearchBar);
