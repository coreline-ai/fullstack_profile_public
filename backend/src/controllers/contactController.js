exports.submitContact = (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            const error = new Error('Missing required fields: name, email, message');
            error.statusCode = 400;
            throw error;
        }

        // TODO: Implement actual email sending or DB storage
        console.log('Contact Form Received:', { name, email, message });

        res.status(200).json({
            success: true,
            message: 'Thank you for your message. We will get back to you soon.'
        });
    } catch (error) {
        next(error);
    }
};
