import { X } from 'lucide-react';

const ModalHeader = ({ onClose }) => (
  <div className="flex justify-between mb-6 px-6">
    <div>
      <h2 className="text-xl montserrat font-600 text-[#3A3A3A] font-bold">Notifications</h2>
      <p className="text-sm inter text-[#3A3A3ABF]">View all your alerts in one place.</p>
    </div>

    <button onClick={onClose}>
      <X size={20} />
    </button>
  </div>
);

export default ModalHeader;
