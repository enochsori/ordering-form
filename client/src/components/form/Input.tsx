type Props = {
  name: string;
  type: string;
  placeholder: string;
  handleChange: (value: string, name: string) => void;
};

export default function Input({
  name,
  type,
  placeholder,
  handleChange,
}: Props) {
  return (
    <div className='mb-1.5 w-full relative'>
      <label htmlFor={name} className='hidden'>
        {placeholder}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => handleChange(event.target.value, name)}
        className='rounded-md border border-gray-300 text-gray-700 text-sm font-light h-9 px-3 py-2 w-full placeholder:text-gray-400'
      />
    </div>
  );
}
