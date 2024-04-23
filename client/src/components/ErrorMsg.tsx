type Prop = {
  children: string;
};

export default function ErrorMsg({ children }: Prop) {
  return (
    <div className='flex mx-auto border border-red-500  h-[75px] w-[80%] justify-center items-center text-red-500 text-sm'>
      {children}
    </div>
  );
}
