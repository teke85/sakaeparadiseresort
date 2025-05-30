import React from "react";

const Indicator = () => {
  return (
    <section>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#9A6F00] hover:bg-lodge-accent rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Indicator;
