const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


router.post('/', async (req, res) => {
    try{
        const data = req.body
        const newPerson = new Person(data);
    
        const response = await newPerson.save();
        console.log('Data Saved');
        res.status(200).json(response);
    }catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal Server Error'});
    }
})

//Get Mehtod
router.get('/', async(req, res) => {
    try {
        const data = await Person.find();
        console.log('Data Fechted');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
         res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:workType', async(req,res)=>{
    try {
        const workType =  req.params.workType;
        if(workType == "chef" || workType == "manager" || workType == "cleaner"){
            const response = await Person.find({work: workType});
            console.log('Responce Fetched');
            res.status(200).json(response);
}else{
        res.status(404).json({error: 'Invalid work type....'})
        }
    } catch (err) {
        console.log(err);
         res.status(500).json({error: 'Internal Server Error....'});
    }
})
module.exports = router;
