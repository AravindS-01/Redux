import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hook';
import './header.css';

const Header = () => {
  const selector = useAppSelector(state => state.cart);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    const data = selector.dishes.reduce((previousValue, currentValue) => {
      return Number(previousValue) + Number(currentValue.numberOfItem);
    }, 0);
    setCartCount(data)
  }, [selector.dishes])

  return (
    <div className='headerele'>
      
      <button className='buttonEle' >
        <span>Cart</span>
        <span className='count' >{cartCount}</span>
      </button>
      <div style={{ width: '130px' }}></div>
    </div>
  )
}

export default Header;