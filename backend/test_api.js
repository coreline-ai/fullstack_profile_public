const PORT = process.env.PORT || '4000';
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}/api`;

async function testEndpoints() {
    try {
        // 1. Projects
        console.log('Testing GET /projects...');
        const projectsProps = await fetch(`${BASE_URL}/projects`);
        const projects = await projectsProps.json();
        console.log('Projects:', projects.length > 0 ? 'OK' : 'Empty');

        // 2. Blog
        console.log('Testing GET /blog...');
        const blogProps = await fetch(`${BASE_URL}/blog`);
        const blog = await blogProps.json();
        console.log('Blog:', blog.length > 0 ? 'OK' : 'Empty');

        // 3. Contact
        console.log('Testing POST /contact...');
        const contactProps = await fetch(`${BASE_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Tester', email: 'test@test.com', message: 'Hello' })
        });
        const contact = await contactProps.json();
        console.log('Contact:', contact.success ? 'OK' : 'Failed');

        console.log('All tests completed.');
    } catch (error) {
        console.error('Test Failed:', error);
    }
}

testEndpoints();
