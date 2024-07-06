import React from 'react';

const CanceledPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold">Payment Canceled</h1>
            <p>Your payment was canceled. Please try again.</p>
        </div>
    );
};

export default CanceledPage;