function CheckboxGroup({ label, name, options, values, onChange }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="grid grid-cols-2 gap-1 border p-2 rounded-lg">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={values.includes(option)}
              onChange={onChange}
              className="h-4 w-4"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CheckboxGroup;
