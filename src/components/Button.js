import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="btn"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  text: "Add",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
