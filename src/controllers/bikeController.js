const { Bike: BikeModel } = require('../models/Bike')

const bikeController = {
    find: async (req, res) => {
        try {
            const id = req.params.id
            const bike = await BikeModel.findById(id)
            res.status(200).json({ data: bike });
        } catch (err) {
            res.status(500).send({ error: 'Fail to find the bike on the database' });
        }
    },

    list: async (req, res) => {
        try {
            const bikes = await BikeModel.find()
            res.status(200).json({ data: bikes });
        } catch (err) {
            res.status(500).send({ error: 'Fail to list bikes on the database' });
        }
    },

    create: async (req, res) => {
        try {
            const bike = {
                brand: req.body.brand,
                modelName: req.body.modelName,
                cc: req.body.cc,
                hp: req.body.hp,
                color: req.body.color,
                year: req.body.year
            };
            const response = await BikeModel.create(bike)
            res.status(201).json({ data: response });
        } catch (err) {
            res.status(500).send({ error: 'Fail to insert bike on the database' });
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id
            const bike =  {
                brand: req.body.brand,
                modelName: req.body.modelName,
                cc: req.body.cc,
                hp: req.body.hp,
                color: req.body.color,
                year: req.body.year
            }
            const response = await BikeModel.findByIdAndUpdate(id, bike, { new: true })
            res.status(200).json({ data: response });
        } catch (err) {
            res.status(500).send({ error: 'Fail to find the bike on the database' });
        }
    },

    delete: async (req, res) => {
        try {
            const bike = await BikeModel.findByIdAndDelete(req.params.id)
            res.status(204).send();
        } catch (err) {
            res.status(500).send({ error: 'Fail to delete bike on the database' });
        }
    }
}

module.exports = bikeController