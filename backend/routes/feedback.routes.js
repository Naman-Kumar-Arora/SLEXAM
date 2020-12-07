const route = require('express').Router();
const Feedback = require('../models/feedback.models');

route.get('/', async(req,res) => {
    try{
        const foundFeedback = await Feedback.find();
        res.json(foundFeedback);
    } catch(err){
        console.log(err);
    }
});

route.post('/', async (req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const dept = req.body.dept;
    const nameofs = req.body.nameofs;
    const item_date = req.body.item_date;
    const feedbackItem = Feedback({
        title:title,
        description:description,
        dept:dept,
        nameofs:nameofs,
        item_date:item_date

    })
    try{
        const saveFeedback = await feedbackItem.save();
        res.json(saveFeedback);
    } catch(err){
        console.log(err);
    }
});

module.exports = route;