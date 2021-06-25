// Function thate renders the Ui
import Button from "./Button";
const Header = (props) => {
    const onClick = () => {
        console.log("Clicked")
    }
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
