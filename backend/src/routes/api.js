const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const blogController = require('../controllers/blogController');
const contactController = require('../controllers/contactController');
const uploadController = require('../controllers/uploadController');

// Upload Route
router.post('/upload', uploadController.uploadMiddleware, uploadController.uploadImage);

// Project Routes
router.get('/projects', projectController.getProjects);
router.get('/projects/:slug', projectController.getProjectBySlug);
router.post('/projects', projectController.createProject);
router.put('/projects/:slug', projectController.updateProject);

// Blog Routes
router.get('/blog', blogController.getBlogPosts);
router.get('/blog/:slug', blogController.getBlogPostBySlug);
router.post('/blog', blogController.createBlogPost);
router.put('/blog/:slug', blogController.updateBlogPost);

// Contact Routes
router.post('/contact', contactController.submitContact);

// Timeline Routes
const timelineController = require('../controllers/timelineController');
router.get('/timeline', timelineController.getTimeline);
router.post('/timeline', timelineController.createTimelineItem);
router.put('/timeline/:id', timelineController.updateTimelineItem);
router.delete('/timeline/:id', timelineController.deleteTimelineItem);

module.exports = router;
