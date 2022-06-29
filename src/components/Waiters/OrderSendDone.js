import React from 'react'

const OrderSendDone = (props) => {
  const { name, qty } = props;
  return (<>
    <p className="order" id="p1">
      {name}
    </p>
    <p>Quantity: {qty}</p>
    <hr />
  </>
  )
}


export default OrderSendDone