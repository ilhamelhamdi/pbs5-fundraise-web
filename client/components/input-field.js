import React from 'react'

export default function InputField({ type, onChange, name, value, placeholder, autoComplete, inputStyle, }) {
  return (
    <div className="w-full mb-4">
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={identifier}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputStyle}
      />
      <span className="text-sm text-red-600"></span>
    </div>
  )
}