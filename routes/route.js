const express = require('express');

const router = express.Router();

const itemList = [{
    itemName : "Rice",
    unitPrice : 24,
    quantity : 5,
    isPurchased : false
},
{
    itemName : "Potato",
    unitPrice : 30,
    quantity : 4,
    isPurchased : false
},
{
    itemName : "Soap",
    unitPrice : 60,
    quantity : 2,
    isPurchased : false
},
{
    itemName : "Maggie",
    unitPrice : 15,
    quantity : 4,
    isPurchased : false
},
{
    itemName : "Apple",
    unitPrice : 200,
    quantity : 1,
    isPurchased : false
}]

router.get('/getItems', async (req,res) => {
    
    try {
        res.status(200).send({ success: 'y', data: itemList });
    } catch (error) {
        console.error("Server error ", error);

        res.status(401).send({
            success: 'n', data: { message: error }
        });
    }
})

module.exports = router;