// StripeDemoModal.tsx
import React, { useState } from "react";

interface Props {
  courseTitle: string;
  amount: number;
  onClose: () => void;
}

const StripeDemoModal: React.FC<Props> = ({ courseTitle, amount, onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [message, setMessage] = useState("");

  const handlePay = () => {
    setMessage("Payment successful! (Demo only)");
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <h2 className="text-xl font-bold mb-4">Pay for {courseTitle}</h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />

        <button
          onClick={handlePay}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-2"
        >
          Pay ₹{amount}
        </button>

        {message && <p className="text-green-600 mb-2">{message}</p>}

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          ×
        </button>
      </div>
    </div>
  );
};

export default StripeDemoModal;
