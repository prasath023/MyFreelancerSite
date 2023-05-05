import React from 'react'

const Cart = ({userRequirements}) => {
    console.log(userRequirements);
  return (
    <div>
       <div>
       <h1>Here we go..</h1>
       </div>
       <div>
        {userRequirements.length > 0 && userRequirements.map((title)=>
        <div>
          <div>
          {title}
          </div>
          <div>
          
          </div>
        </div>
        )
        }
       </div>
    </div>
  )
}

export default Cart