import { FormData } from '../types/type';

type MsgProps = {
  formData: FormData;
};

export default function ConfirmationsMsg({
  formData: { firstName, lastName, order, province },
}: MsgProps) {
  return (
    <>
      <div className='flex flex-col items-center'>
        <span className='text-2xl font-bold z-4'>Order Confirmed!</span>
        <p className='text-base text-center'>
          Thanks{' '}
          <b className=' text-red-600'>
            {firstName} {lastName}
          </b>
        </p>
        <p className='text-base text-center'>
          Your order of <b className=' text-red-600'>{order}</b> will be sent to
          your home in <b className=' text-red-600'>{province}</b>, Canada
        </p>
        <p className='mb-4'>Thank you for participating!</p>
        <p className='text-sm'>
          'This page will redirect to the ordering page soon..'
        </p>
      </div>
    </>
  );
}
