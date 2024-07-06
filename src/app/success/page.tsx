import React from 'react';

const SuccessPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold">Payment Successful!</h1>
            <p>Thank you for your purchase.</p>
        </div>
    );
};

export default SuccessPage;