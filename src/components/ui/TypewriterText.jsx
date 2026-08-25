import React, { memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

const TypewriterText = memo(({ text, className }) => (
  <motion.span variants={containerVariants} initial="hidden" animate="visible" className={className}>
    {text.split('').map((char, index) => (
      <motion.span key={index} variants={letterVariants}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.span>
));

TypewriterText.propTypes = { text: PropTypes.string.isRequired, className: PropTypes.string };
TypewriterText.defaultProps = { className: '' };
export default TypewriterText;