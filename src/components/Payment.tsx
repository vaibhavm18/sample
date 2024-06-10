import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$10/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    name: "Standard",
    price: "$20/month",
    features: ["All Basic", "Feature 3", "Feature 4"],
  },
  {
    name: "Premium",
    price: "$30/month",
    features: ["All Standard", "Feature 4", "Feature 5"],
  },
];

const PaymentModels: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8" id="plans">
      <h2 className="text-3xl font-bold text-center mb-10">Our Plans</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-400 shadow-lg rounded-lg p-6 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-xl font-semibold mb-6">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentModels;
