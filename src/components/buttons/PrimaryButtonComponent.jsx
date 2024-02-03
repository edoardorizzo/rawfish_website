import "../../partials/Color.scss";

function PrimaryButton({ buttonText }) {
  const PrimaryButtonStyle = {
    backgroundColor: "#4effca",
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    fontWeight: 700,
  };

  return <button style={PrimaryButtonStyle}>{buttonText}</button>;
}

export default PrimaryButton;
