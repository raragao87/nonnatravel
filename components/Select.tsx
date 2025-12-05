import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  required = false,
  options,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full">
      <label
        htmlFor={selectId}
        className="block text-sm font-medium text-text-primary mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={selectId}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent min-h-[44px] text-base bg-white ${className} ${
          error ? 'border-red-500' : ''
        }`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${selectId}-error` : undefined}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

