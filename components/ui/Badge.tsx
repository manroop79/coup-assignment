import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  className = '',
}) => {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        text-[#006FE8]
        text-[13px] font-medium
        shadow-sm
        ${className}
      `}
      style={{
        backgroundColor: '#FFFFFF',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '4px',
        paddingBottom: '5px',
        borderRadius: '9999px'
      }}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </div>
  );
};

export default Badge;
