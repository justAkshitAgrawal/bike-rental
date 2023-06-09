import React from "react";

function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-20 h-20 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
}

export default loading;
