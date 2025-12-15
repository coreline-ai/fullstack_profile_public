'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const router = useRouter();
    const [projects, setProjects] = useState<any[]>([]);
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

    useEffect(() => {
        // Auth Check
        const isAuth = localStorage.getItem('admin_auth') === 'true';
        if (!isAuth) {
            router.push('/admin/login');
            return;
        }

        Promise.all([
            fetch(`${API_BASE}/projects`, { cache: 'no-store' }).then(res => res.json()),
            fetch(`${API_BASE}/blog`, { cache: 'no-store' }).then(res => res.json())
        ]).then(([projectsData, postsData]) => {
            if (Array.isArray(projectsData)) setProjects(projectsData);
            if (Array.isArray(postsData)) setPosts(postsData);
            setLoading(false);
        }).catch(err => {
            console.error("Failed to load dashboard data", err);
            setLoading(false);
        });
    }, [API_BASE, router]);

    const handleLogout = () => {
        localStorage.removeItem('admin_auth');
        router.push('/admin/login');
    };

    if (loading) return <div className="p-10">Loading Dashboard...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">Content Dashboard</h1>
                    <div className="flex gap-4 items-center">
                        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">View Site</Link>
                        <button
                            onClick={handleLogout}
                            className="text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Projects Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Projects</h2>
                            <div className="flex gap-2">
                                <Link href="/admin/timeline" className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-200 transition">
                                    Manage Timeline
                                </Link>
                                <Link href="/admin/projects/new" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                                    + New Project
                                </Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {projects.map((p: any) => (
                                <div key={p.slug} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-indigo-200 transition">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{p.title}</h3>
                                        <p className="text-xs text-gray-500">{p.period || 'No period'}</p>
                                    </div>
                                    <Link href={`/admin/projects/${p.slug}`} className="text-indigo-600 font-medium text-sm hover:underline">
                                        Edit
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Blog Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Blog Posts</h2>
                            <Link href="/admin/blog/new" className="px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 transition">
                                + New Post
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {posts.map((p: any) => (
                                <div key={p.slug} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-pink-200 transition">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{p.title}</h3>
                                        <p className="text-xs text-gray-500">{p.publishedAt?.split('T')[0] || 'Draft'}</p>
                                    </div>
                                    <Link href={`/admin/blog/${p.slug}`} className="text-pink-600 font-medium text-sm hover:underline">
                                        Edit
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
