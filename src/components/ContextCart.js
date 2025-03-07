import React, { useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

import Items from './Items'

import CartContext from '../context/contexts/CartContext'
import { CLEAR_CART } from '../context/types/CartTypes'
const ContextCart = () => {
  const { dispatch, state } = useContext(CartContext) //!TODO: TEST  clearCart

  if (state.item.length === 0) {
    return (
      <>
        <header>
          <div className='continue-shopping'>
            <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
            <h3>continue shopping</h3>
          </div>

          <div className='cart-icon'>
            <img src='./images/cart.png' alt='cart' />
            <p>{state.totalItem}</p>
          </div>
        </header>

        <section className='main-cart-section'>
          <h1>shopping Cart</h1>
          <p className='total-items'>
            you have{' '}
            <span className='total-items-count'>{state.totalItem} </span> items
            in shopping cart
          </p>
        </section>
      </>
    )
  }

  return (
    <>
      <header>
        <div className='continue-shopping'>
          <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
          <h3>continue shopping</h3>
        </div>

        <div className='cart-icon'>
          <img src='./images/cart.png' alt='cart' />
          <p>{state.totalItem}</p>
        </div>
      </header>

      <section className='main-cart-section'>
        <h1>shopping Cart</h1>
        <p className='total-items'>
          you have <span className='total-items-count'>{state.totalItem} </span>{' '}
          items in shopping cart
        </p>

        <div className='cart-items'>
          <div className='cart-items-container'>
            <Scrollbars>
              {state.item.map(curItem => {
                return <Items key={curItem.id} {...curItem} />
              })}
            </Scrollbars>
          </div>
        </div>

        <div className='card-total'>
          <h3>
            Cart Total : <span> {state.totalAmount}₹</span>
          </h3>
          <button>checkout</button>
          <button
            className='clear-cart'
            // onClick={dispatch({
            //   type: CLEAR_CART
            // })}
          >
            Clear Cart
          </button>
        </div>
      </section>
    </>
  )
}

export default ContextCart
