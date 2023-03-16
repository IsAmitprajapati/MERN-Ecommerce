const Stripe = require("stripe")

const FRONTEND_DOMAIN = process.env.FRONTEND_URL
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

module.exports = checkoutPage = async()=>{
    try{

        const params = {
            submit_type : "pay",
            mode : "payment",
            payment_method_types : ["card"],
            billing_address_collection : "auto",
            shipping_options : [{shipping_rate: "shr_1MJTX8SHnOGYGLnPO1haAXqp"}],

            line_items : cartItems.map(el=>{
                return{
                    price_data : {
                        currency : "inr",
                        product_data : {
                            name : el.title,
                            images : el.image,
                        },
                        unit_amount : el.sellPrice * 100,
                    },
                    adjustable_quantity : {
                        enabled : true,
                        minimum : 1,
                    },
                    quantity : el.qty,
                }
            }),

            success_url : `${FRONTEND_DOMAIN}/success`,
            cancel_url : `${FRONTEND_DOMAIN}/cancel`,
        };

        const session = await stripe.checkout.sessions.create(params)

        res.status(200).json(session.id)
    }
    catch(err){
        res.status(err.statuscode || 500).json(err.message);
    }
}