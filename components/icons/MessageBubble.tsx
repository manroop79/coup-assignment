import React from 'react';

interface MessageBubbleProps {
  className?: string;
  variant?: 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  className = '',
  variant = 'blue',
  size = 'md',
}) => {
  const sizes = {
    sm: { width: 32, height: 24 },
    md: { width: 44, height: 32 },
    lg: { width: 56, height: 40 },
  };

  const colors = {
    blue: '#007AFF',
    green: '#34C759',
  };

  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Message bubble shape */}
      <path
        d="M4 4C4 1.79086 5.79086 0 8 0H36C38.2091 0 40 1.79086 40 4V20C40 22.2091 38.2091 24 36 24H12L4 32V4Z"
        fill={colors[variant]}
      />
      {/* Three dots */}
      <circle cx="14" cy="12" r="2.5" fill="white" />
      <circle cx="22" cy="12" r="2.5" fill="white" />
      <circle cx="30" cy="12" r="2.5" fill="white" />
    </svg>
  );
};

// Small badge-style message icon - for blue badge
export const MessageIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="18" height="18" rx="6" fill="white" fillOpacity="0.2" />
      <circle cx="6" cy="9" r="1.5" fill="white" />
      <circle cx="9" cy="9" r="1.5" fill="white" />
      <circle cx="12" cy="9" r="1.5" fill="white" />
    </svg>
  );
};

export default MessageBubble;
