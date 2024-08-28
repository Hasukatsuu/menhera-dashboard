'use client'
import { CgProfile } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";

const ProfileHeader = () => {
  return (
    <div className="flex items-center p-6 drop-shadow-lg">
      {/* Avatar */}
      <img
        src="/images/avatar.jpg"
        alt="Avatar"
        className="w-28 h-28 object-cover rounded-full border-2 border-khung max-w-none max-h-none "
      />
      {/* Profile Information */}
      <div className="ml-6">
        <h2 className="text-2xl font-bold text-white">
          Menhera-Chan
          <span className="text-sm"> (Beta)</span>
        </h2>
        <p className="text-gray-400">
          <span className="text-white font-semibold">Chat bot Ai - </span>
          Em gái tôi rất đẹp, vui tính, tươi sáng, và hướng nội...
        </p>
        {/* Action Buttons */}
        <div className="mt-4 flex space-x-4">
          <button
            className="px-4 py-2 font-light bg-secondary text-white rounded-full flex items-center space-x-2 hover:bg-hover transition-colors"
            onClick={() => window.location.href = 'https://discord.com/oauth2/authorize?client_id=1277227304657096748&scope=bot%20applications.commands&permissions=105227086912'}
          >
            <FaDiscord size={20} className='mr-2'/>
            Thêm vào Discord
          </button>
          <button className="px-4 py-2 bg-secondary font-light text-white rounded-full flex items-center space-x-2 hover:bg-hover transition-colors">
            <IoChatbubble size={20} className='mr-2'/>
            Trò Chuyện
          </button>
          <button className="px-4 py-2 font-light bg-secondary text-white rounded-full flex items-center space-x-2 hover:bg-hover transition-colors">
            <CgProfile size={20} className='mr-2'/>
            Chủ nhân
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader