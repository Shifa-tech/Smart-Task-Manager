const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title: "Learn Express"
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { createTask };