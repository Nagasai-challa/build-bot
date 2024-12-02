import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#d1eaff"; 
  }, []);

  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to Contact Management
      </h2>
      <p className="text-gray-600 text-lg">
        Use the navigation above to create and view your contacts.
      </p>
    </div>
  );
};

export default Home;
