import React from 'react';

interface NutritionalItem {
  label: string;
  value: string;
  unit: string;
}

interface NutritionalInfoProps {
  nutritionalInfo: NutritionalItem[];
}

export const NutritionalInfo: React.FC<NutritionalInfoProps> = ({ nutritionalInfo }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-[#2A2A72] text-xl font-bold text-center mb-6">
        DECLARACIÓN NUTRIMENTAL POR 100 G
      </h3>
      <div className="space-y-2">
        {nutritionalInfo.map((info, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b border-gray-200"
          >
            <span className="text-gray-700">{info.label}</span>
            <span className="font-medium">
              {info.value} {info.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


