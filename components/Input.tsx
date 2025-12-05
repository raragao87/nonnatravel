import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  required = false,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-text-primary mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={inputId}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent min-h-[44px] text-base ${className} ${
          error ? 'border-red-500' : ''
        }`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

