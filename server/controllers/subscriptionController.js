const Subscription = require('../models/Subscription');

exports.getSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        res.json(subscriptions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addSubscription = async (req, res) => {
    const { email } = req.body;
    try {
        const newSubscription = new Subscription({ email });
        await newSubscription.save();
        res.json(newSubscription);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
