import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const CartBag = () => {
    let [test, setTest] = useState(JSON.parse(localStorage.getItem('cart')));

    let arr = JSON.parse(localStorage.getItem('cart'))


    function deleteFromCart(index) {
        let arr = [...test]
        arr.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(arr))
        setTest(arr)
    }
    return (
        <div style={{
          background: 'url(https://images.pexels.com/photos/532566/pexels-photo-532566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          minHeight: '650px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap '
        }}>
    
          <h1 style={{color: '#deaf38', fontFamily: 'Luckiest Guy cursive', marginTop: '25px'}}>Shopping Cart</h1>
          <div style={{
    
            width: '100%',
            height: '100%',
            minHeight: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
            
          }}>
            {arr.length ? (
              arr.map((item, index) =>
                <>
                  <div className='cart-item'>
                    <div style={{
                      background: `url(${item.image}) no-repeat center center`,
                      backgroundSize: 'cover',
                      width: '200px',
                      height: '200px',
                      flexWrap: 'wrap',
                      justifyContent: 'spaceAround'
                    }}>
                    </div>
                    <div className='cart-desc'>
                      <div>{item.title}</div>
                      <div>$ {item.price}</div>
    
                    </div>
                    <div className='btn-cart'>
                      <button onClick={() => deleteFromCart(index)}>Delete</button>
    
                    </div>
    
                  </div>
                </>
              )
            ) : <div>
                <img style={{width: '200px', height: '200px', display: 'flex', marginLeft: '300px'}} src="https://icons-for-free.com/iconfiles/png/512/face+sad+smiley+icon-1320183582392064872.png"></img>
                <h1 style={{fontSize: '40px', marginTop: '25px'}}>Ooops, you deleted all choosen products!</h1>
            </div>
                
    
            }
          </div>
        </div>
      );
    };
    
    export default CartBag;