import Raect from "react";
const Spinner = (props) => {
  return <div>{props.message}</div>;
};
//default value for the props
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
