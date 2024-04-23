import { imageFiles } from '../settings';
import { Order } from '../types/type';

type Prop = {
  image: Order;
};

export default function ProductImg({ image }: Prop) {
  return (
    <img
      src={`images/${imageFiles[image]}`}
      alt=''
      className='h-[220px] w-full overflow-hidden object-cover rounded-md'
    />
  );
}
