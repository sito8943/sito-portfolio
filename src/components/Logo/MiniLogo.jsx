import PropTypes from "prop-types";

function MiniLogo(props) {
  const { color, className } = props;

  return (
    <svg
      width="76"
      height="77"
      viewBox="0 0 76 77"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.4407 29.54L55.2007 20.89L37.7307 3.40997L20.2607 20.89L55.0207 55.77C49.2607 61.58 43.4907 67.4 37.7307 73.21C31.9107 67.4 26.1007 61.58 20.2807 55.77C23.1407 52.93 26.0107 50.08 28.8707 47.24"
        stroke={color}
        strokeWidth="4.36"
        strokeMiterlimit="10"
      />
      <path
        d="M59.5107 25.14L72.4707 38.3L59.5107 51.45"
        stroke={color}
        strokeWidth="4.36"
        strokeMiterlimit="10"
      />
      <path
        d="M16.0303 51.32C11.7103 46.98 7.39031 42.65 3.07031 38.31C7.39031 33.87 11.7103 29.44 16.0303 25"
        stroke={color}
        strokeWidth="4.36"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

MiniLogo.defaultProps = {
  color: "#FBFBFB",
};

MiniLogo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default MiniLogo;
