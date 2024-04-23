type ImageProp = {
  image: string;
};

export default function ProductImg({ image }: ImageProp) {
  return (
    <img src={`images/${image}`} alt='image' className='w-full h-[220px]' />
  );
}
