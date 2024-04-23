export default function Button({ handleClick, disabled, subStatus, formData }) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className='relative bg-blue-900 border-transparent rounded-lg text-white cursor-pointer block font-medium text-base mx-auto h-10 w-[90%] disabled:opacity-60 '
    >
      {subStatus === 'pending' && (
        <div className=' inline-block relative w-20 h-20 top-[-21px]'>
          <div className=' absolute border-4 border-white opacity-100 rounded-full animate-spin'></div>
          <div className=' absolute border-4 border-white opacity-100 rounded-full animate-spin delay-[-0.5s]'></div>
        </div>
      )}
      {subStatus === 'idle' && <span>Submit</span>}
    </button>
  );
}
