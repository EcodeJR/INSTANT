import PropTypes from 'prop-types';

function Popup({ message }) {
    return ( 
    <div className="fixed bottom-5 right-5 px-5 py-2 bg-green-600 border-white/20 border-[3px] shadow shadow-white/30 rounded-lg">
        <p className="font-bold text-lg z-10 text-white">Successfully Added to {message}</p>
    </div>
     );
}


Popup.propTypes = {
    message: PropTypes.string.isRequired,
  };
 
export default Popup;