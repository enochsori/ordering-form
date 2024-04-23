import Select from './Select';
import Input from './Input';
import Button from './Button';

import { itemOptions, sizeOptions } from '../../settings';
import { Disabled, FormData, SubStatus } from '../../types/type';

type FormProps = {
  formData: FormData;
  disabled: Disabled;
  subStatus: SubStatus;
  handleChange: (value: string, name: string) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Form({
  formData,
  handleChange,
  handleClick,
  disabled,
  subStatus,
}: FormProps) {
  return (
    <form className='px-[20px]'>
      <div>
        <Select
          label='Your order'
          htmlFor='order'
          selection={formData.order}
          handleChange={handleChange}
          options={itemOptions}
        />
        {formData.order === 'tshirt' && (
          <Select
            label='T-shirt Size'
            htmlFor='size'
            selection={formData.size}
            handleChange={handleChange}
            options={sizeOptions}
          />
        )}
      </div>

      <div className='mb-4'>
        <h1 className='font-bold'>Order Form</h1>
        <h2>Provide your information</h2>
        <div className='flex justify-between w-full'>
          <Input
            name='firstName'
            type='text'
            placeholder='First name'
            handleChange={handleChange}
          />
          <Input
            name='lastName'
            type='text'
            placeholder='Last name'
            handleChange={handleChange}
          />
        </div>
        <Input
          name='email'
          type='text'
          placeholder='Email'
          handleChange={handleChange}
        />
        <h2>Shipping Address</h2>
        <Input
          name='address'
          type='address'
          placeholder='Address'
          handleChange={handleChange}
        />
        <div>
          <Input
            name='city'
            type='text'
            placeholder='City'
            handleChange={handleChange}
          />
          <Input
            name='province'
            type='text'
            placeholder='Province'
            handleChange={handleChange}
          />
        </div>
        <div>
          <Input
            name='postcode'
            type='text'
            placeholder='Postal Code'
            handleChange={handleChange}
          />
          <Input
            name='country'
            type='text'
            placeholder='Country'
            handleChange={handleChange}
          />
        </div>
      </div>
      <Button
        formData={formData}
        handleClick={handleClick}
        disabled={disabled}
        subStatus={subStatus}
      />
    </form>
  );
}
