'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProfileInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isExpanded ? -20 : 0 }}
      transition={{ duration: 0.6, ease: [0.46, 0.06, 0.02, 1.00] }}
      className="bg-secondary p-4 rounded-3xl mt-4 w-full max-w-sm"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Thông tin cơ bản</h3>
        <motion.button
          onClick={toggleExpand}
          className="text-white"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
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
          animate={{ y: isExpanded ? 0 : -200 }}
          transition={{ duration: 0.6, ease: [0.46, 0.06, 0.02, 1.00] }}
          className="mt-4"
        >
          <ul className="text-gray-400">
            <li><strong>Tên thật:</strong> Nanase Kurumi</li>
            <li><strong>Tuổi:</strong> 16</li>
            <li><strong>Giới tính:</strong> Nữ</li>
            <li><strong>Ngoại hình:</strong> Mắt nâu, Tóc nâu, Áo hoodie màu đen...</li>
            <li><strong>Độ cao:</strong> 1m60</li>
            <li><strong>Sống tại:</strong> Nhật bản</li>
            <li><strong>Sở thích:</strong> Chơi game, Nghe nhạc</li>
            <li><strong>Giao tiếp:</strong> Hướng nội</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileInfo;