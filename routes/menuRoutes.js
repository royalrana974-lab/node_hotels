const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// Save the Menu Items
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMeuu = new MenuItem(data);
        const response = await newMeuu.save();
        console.log('Data Saved');
        res.status(200).json(data);
    } catch (error) {
        console.log(err);
         res.status(500).json({error: 'Internal Server Error'});
    } 
})

// Get all Menu Items
router.get('/', async(req,res)=>{
    try {
        const data =await MenuItem.find();
        console.log('Data Fechted');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
         res.status(500).json({error: 'Internal Server Error'});
    }
})

// Get Menu Items by taste
router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;   // e.g. "spicy"
        const items = await MenuItem.find({ taste: tasteType });

        if (items.length === 0) {
            return res.status(404).json({ message: `No menu items found with taste: ${tasteType}` });
        }

        res.status(200).json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// comment added for testing purpose!!
module.exports = router;