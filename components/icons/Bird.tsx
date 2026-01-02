import React from 'react';

interface BirdProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
}

export const Bird: React.FC<BirdProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'default'
}) => {
  const sizes = {
    sm: { width: 24, height: 16 },
    md: { width: 40, height: 28 },
    lg: { width: 64, height: 44 },
  };

  const { width, height } = sizes[size];

  if (variant === 'outline') {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M2 14C6 10 12 8 20 10C28 12 34 10 38 6"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 18C14 16 18 15 24 16"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bird body */}
      <ellipse
        cx="20"
        cy="14"
        rx="12"
        ry="8"
        fill="#3B82F6"
      />
      {/* Wing */}
      <path
        d="M8 12C4 8 2 4 4 2C6 0 12 4 16 10"
        fill="#2563EB"
      />
      {/* Tail */}
      <path
        d="M32 14C36 12 40 10 40 14C40 18 36 16 32 14Z"
        fill="#3B82F6"
      />
      {/* Head */}
      <circle cx="10" cy="10" r="5" fill="#3B82F6" />
      {/* Beak */}
      <path
        d="M5 10L2 9L5 11L5 10Z"
        fill="#F97316"
      />
      {/* Eye */}
      <circle cx="8" cy="9" r="1.5" fill="white" />
      <circle cx="8" cy="9" r="0.8" fill="#1A1A1A" />
    </svg>
  );
};

// Simplified stylized bird matching the design
export const StylizedBird: React.FC<BirdProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizes = {
    sm: { width: 28, height: 18 },
    md: { width: 48, height: 32 },
    lg: { width: 80, height: 52 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main body */}
      <path
        d="M12 20C8 18 4 14 6 10C8 6 16 8 22 14C28 20 36 22 44 18"
        stroke="#3B82F6"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Upper wing */}
      <path
        d="M16 12C12 8 10 4 14 4C18 4 20 10 22 14"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eye dot */}
      <circle cx="10" cy="14" r="2" fill="#F97316" />
    </svg>
  );
};

export default Bird;

