import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "cursor-pointer font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50";
  
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg",
    secondary: "bg-orange-500 text-white hover:bg-orange-600 shadow-md",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}