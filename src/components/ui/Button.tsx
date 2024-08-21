import React from "react";
interface ButtonProps {
  className: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}
const Button = (props: ButtonProps) => {
  const { className, label, onClick, disabled, isLoading, ...rest } = props;
  return (
    <button
      className={className}
      disabled={disabled}
      {...rest}
      onClick={onClick}
    >
      <div className="flex">
        {isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-2 animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        {label}
      </div>
    </button>
  );
};

export default Button;
