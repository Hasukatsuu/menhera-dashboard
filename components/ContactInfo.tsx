'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.46, 0.06, 0.02, 1.00] }}
      className={`bg-secondary p-4 rounded-3xl mt-4 w-full max-w-sm ${isExpanded ? 'shadow-lg' : 'shadow-sm'}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Thông tin liên hệ</h3>
        <motion.button
          onClick={toggleExpand}
          className="text-white"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.46, 0.06, 0.02, 1.00]  }}
        >
          <FaChevronDown />
        </motion.button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0, filter: 'blur(8px)' }}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0, filter: isExpanded ? 'blur(0px)' : 'blur(8px)' }}
        transition={{ duration: 0.6, ease: [0.46, 0.06, 0.02, 1.00] }}
        className="overflow-hidden"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: isExpanded ? 0 : -40 }}
          transition={{ duration: 0.6, ease: [0.46, 0.06, 0.02, 1.00] }}
          className="mt-4"
        >
          <ul className="text-gray-400">
            <li><strong>Discord:</strong> Menhera-chan#4911</li>
            <li><strong>Số điện thoại:</strong> Chưa xác định</li>
            <li><strong>Email:</strong> menhera-chan@minhvmware.top</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;