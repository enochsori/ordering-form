import { ItemOptions, Order, Size } from '../../types/type';

type Props = {
  htmlFor: string;
  label: string;
  selection: Order | Size;
  handleChange: (value: string, name: string) => void;
  options: ItemOptions[];
};

export default function Select({
  htmlFor,
  label,
  selection,
  handleChange,
  options,
}: Props) {
  return (
    <div className='my-4'>
      <label htmlFor={htmlFor} className='hidden'>
        {label}
      </label>
      <select
        value={selection}
        onChange={(event) => handleChange(event.target.value, htmlFor)}
        className='bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 h-10 px-2 w-full'
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className='cursor-pointer'
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
