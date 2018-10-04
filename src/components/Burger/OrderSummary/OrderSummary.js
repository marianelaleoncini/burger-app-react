import React from 'react';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    return (
      <li key={ingredientKey}>
        {ingredientKey}: {props.ingredients[ingredientKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <button>Cancel</button>
      <button>Continue</button>
    </React.Fragment>
  );
};

export default OrderSummary;
