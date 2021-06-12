import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchWeather } from "../action";

// Search component
class SearchBar extends React.Component {
  state = { isSubmited: false, val: "" };
  // Calling the action creator on submit

  onSubmit = (fieldValue) => {
    this.props.fetchWeather(fieldValue.city);
    this.setState({ isSubmited: true });
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
              value={this.state.val}
              placeholder="Enter city or zipcode"
              onChange={(e) => {
                this.setState({ val: e.target.value });
              }}
            />
            {this.props.err ? <div>{this.props.err.error.message}</div> : null}
          </div>
          <button className="primary ui button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    err: state.weather.error,
    iserr: state.weather.isErr,
  };
};
SearchBar = connect(mapStateToProps, { fetchWeather })(SearchBar);
export default reduxForm({
  form: "contact",
})(SearchBar);
