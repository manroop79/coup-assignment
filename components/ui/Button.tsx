import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  className = '',
  icon,
  onClick,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    text-[15px] font-medium
    cursor-pointer
    transition-all duration-200 ease-out
    border-none no-underline
  `;

  const variants = {
    primary: `
      bg-[#007AFF] text-white
      hover:bg-[#0066DD] hover:shadow-md
      active:scale-[0.98]
    `,
    secondary: `
      bg-white text-[#1A1A1A]
      border border-[#D1D5DB]
      hover:bg-[#F9FAFB] hover:border-[#9CA3AF]
      active:scale-[0.98]
    `,
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const inlineStyles = {
    paddingLeft: '18px',
    paddingRight: '18px',
    paddingTop: '9px',
    paddingBottom: '9px',
    borderRadius: '43px',
  };

  if (href) {
    return (
      <a href={href} className={combinedStyles} style={inlineStyles}>
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} style={inlineStyles}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
