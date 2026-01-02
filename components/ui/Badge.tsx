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
        inline-flex items-center gap-1.5 md:gap-2
        text-[#006FE8]
        text-[12px] md:text-[13px] font-medium
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
      {icon && <span className="flex items-center scale-95 md:scale-100">{icon}</span>}
      {children}
    </div>
  );
};

export default Badge;
