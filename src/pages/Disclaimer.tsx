import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="pt-24 px-6">
        <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>
        <p>
          The information provided on this site is for general informational purposes only. We make no warranties of any kind.
        </p>
      </main>
    </div>
  );
};

export default Disclaimer;
