const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/projects.json');

const getProjectsData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading projects data:', err);
        return [];
    }
};

const saveProjectsData = (projects) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Error saving projects data:', err);
        return false;
    }
};

exports.getProjects = (req, res, next) => {
    try {
        const { tag } = req.query;
        let projects = getProjectsData();
        let result = projects;

        if (tag) {
            result = result.filter(p => p.tags.includes(tag));
        }

        res.json(result);
    } catch (error) {
        next(error);
    }
};

exports.getProjectBySlug = (req, res, next) => {
    try {
        const { slug } = req.params;
        const projects = getProjectsData();
        const project = projects.find(p => p.slug === slug);

        if (!project) {
            const error = new Error('Project not found');
            error.statusCode = 404;
            throw error;
        }

        res.json(project);
    } catch (error) {
        next(error);
    }
};

exports.createProject = (req, res, next) => {
    try {
        let projects = getProjectsData();
        const newProject = {
            ...req.body,
            slug: req.body.slug || req.body.title.toLowerCase().replace(/ /g, '-'),
            createdAt: new Date().toISOString()
        };
        projects.unshift(newProject);
        saveProjectsData(projects);
        res.status(201).json(newProject);
    } catch (error) {
        next(error);
    }
};

exports.updateProject = (req, res, next) => {
    try {
        const { slug } = req.params;
        let projects = getProjectsData();
        const index = projects.findIndex(p => p.slug === slug);

        if (index === -1) {
            const error = new Error('Project not found');
            error.statusCode = 404;
            throw error;
        }

        projects[index] = { ...projects[index], ...req.body };
        saveProjectsData(projects);
        res.json(projects[index]);
    } catch (error) {
        next(error);
    }
};
