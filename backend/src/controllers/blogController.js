const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/blog.json');

const getBlogData = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading blog data:', err);
        return [];
    }
};

const saveBlogData = (posts) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Error saving blog data:', err);
        return false;
    }
};

exports.getBlogPosts = (req, res, next) => {
    try {
        const { tag } = req.query;
        let blogPosts = getBlogData();
        let result = blogPosts;

        if (tag) {
            result = result.filter(p => p.tags.includes(tag));
        }

        res.json(result);
    } catch (error) {
        next(error);
    }
};

exports.getBlogPostBySlug = (req, res, next) => {
    try {
        const { slug } = req.params;
        const blogPosts = getBlogData();
        const post = blogPosts.find(p => p.slug === slug);

        if (!post) {
            const error = new Error('Blog post not found');
            error.statusCode = 404;
            throw error;
        }

        res.json(post);
    } catch (error) {
        next(error);
    }
};

exports.createBlogPost = (req, res, next) => {
    try {
        let blogPosts = getBlogData();
        const newPost = {
            ...req.body,
            slug: req.body.slug || req.body.title.toLowerCase().replace(/ /g, '-'),
            publishedAt: new Date().toISOString()
        };
        blogPosts.unshift(newPost);
        saveBlogData(blogPosts);
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
};

exports.updateBlogPost = (req, res, next) => {
    try {
        const { slug } = req.params;
        let blogPosts = getBlogData();
        const index = blogPosts.findIndex(p => p.slug === slug);

        if (index === -1) {
            const error = new Error('Blog post not found');
            error.statusCode = 404;
            throw error;
        }

        blogPosts[index] = { ...blogPosts[index], ...req.body };
        saveBlogData(blogPosts);
        res.json(blogPosts[index]);
    } catch (error) {
        next(error);
    }
};
