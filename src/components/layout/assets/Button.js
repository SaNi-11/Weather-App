import PropTypes from 'prop-types';

export const Button = ({ children, ...props }) => (
  <button
    className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-20 rounded-md transition ease-in-out delay-550 hover:bg-white hover:text-indigo-700 font-semibold mb-2"
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
