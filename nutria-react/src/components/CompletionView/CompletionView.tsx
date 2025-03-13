import React from 'react';

const CompletionView = () => {
  return (
    <div className="">
      <div className="flex items-center">
        {/* Green check mark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-green-500"  // Size and green color
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="ml-2 text-green-500 font-semibold">Completed</p>
      </div>
    </div>
  );
};

export default CompletionView;
