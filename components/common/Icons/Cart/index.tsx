import Image from 'next/image'
import ShoppingCart from '../../../../public/assets/ShoppingCart.svg'

const CartIcon = ({width, height} : {width: number, height: number}): JSX.Element => {
  return <Image width={width} height={height} alt="Shopping Cart" src={ShoppingCart}/>
}

export default CartIcon