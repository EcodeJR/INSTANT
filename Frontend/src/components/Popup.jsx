import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheckDouble } from "react-icons/fa6";

const Popup = ({ message, show, onClose }) => {
  useEffect(() => {
    let timeout;
    if (show) {
      timeout = setTimeout(() => {
        onClose();
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [show, onClose]);

  return show ? (
    <AnimatePresence>
      <motion.div
      initial={{ opacity:0, x: 50 }}
      animate={{ opacity:1, x:0 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-5 right-5 px-5 py-2 bg-green-400 border-white/80 border-[3px] shadow shadow-white/30 rounded-lg z-30 flex items-center justify-around">
        <FaCheckDouble className='text-white text-lg mx-3' />
        <p className="text-lg z-10 text-white">{message}</p>
      </motion.div>
    </AnimatePresence>
  ) : null;
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
 
export default Popup;