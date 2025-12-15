const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.join(__dirname, '../data/timeline.json');

const getTimelineData = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            return [];
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading timeline data:', err);
        return [];
    }
};

const saveTimelineData = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Error saving timeline data:', err);
        return false;
    }
};

exports.getTimeline = (req, res, next) => {
    try {
        const data = getTimelineData();
        res.json(data);
    } catch (error) {
        next(error);
    }
};

exports.createTimelineItem = (req, res, next) => {
    try {
        const items = getTimelineData();
        const newItem = {
            id: uuidv4(),
            ...req.body
        };
        items.unshift(newItem); // Add to beginning
        saveTimelineData(items);
        res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
};

exports.updateTimelineItem = (req, res, next) => {
    try {
        const { id } = req.params;
        let items = getTimelineData();
        const index = items.findIndex(item => item.id === id);

        if (index === -1) {
            const error = new Error('Timeline item not found');
            error.statusCode = 404;
            throw error;
        }

        items[index] = { ...items[index], ...req.body };
        saveTimelineData(items);
        res.json(items[index]);
    } catch (error) {
        next(error);
    }
};

exports.deleteTimelineItem = (req, res, next) => {
    try {
        const { id } = req.params;
        let items = getTimelineData();
        const initialLength = items.length;
        items = items.filter(item => item.id !== id);

        if (items.length === initialLength) {
            const error = new Error('Timeline item not found');
            error.statusCode = 404;
            throw error;
        }

        saveTimelineData(items);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
