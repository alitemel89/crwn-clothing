import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IOJ5HEDHwCRcTeDn5nm6bwIbJY3TkZLO8QLdsvvSQKYsT8Mafl5Mnnc00X9Z9uQ7tDoeJkWuMl4WIFvorFBc5RE00DkZY9t8v';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout 
        label="Pay Now"
        name = "CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;