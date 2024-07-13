import React, { useState } from "react";
import { ClipboardIcon, ClipboardCheckIcon } from "@heroicons/react/outline";

const EmailWithCopyButton: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const email: string = "jeung.pavee@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <div className="flex items-center text-dark-6 mb-[5vh]">
      <span>{email}</span>
      <button
        onClick={handleCopy}
        className="ml-2 p-2 text-white rounded hover:bg-dark- flex items-center"
      >
        {copied ? (
          <ClipboardCheckIcon className="h-5 w-5" />
        ) : (
          <ClipboardIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default EmailWithCopyButton;
