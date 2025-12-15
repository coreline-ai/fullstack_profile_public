'use client';

import { useState, useEffect, use } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Dynamically import MDEditor to avoid SSR issues
import rehypeSanitize from "rehype-sanitize"; // Security
import { commands } from '@uiw/react-md-editor';
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

// Custom rehype plugin to remove images with empty src
// Custom remark plugin to remove images with empty src
const removeEmptyImageRemark = () => {
    return (tree: any) => {
        const visit = (node: any) => {
            if (node.type === 'image') {
                if (!node.url || node.url === '' || node.url === '#') {
                    node.url = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    node.alt = 'hidden';
                }
            }
            if (node.children) {
                node.children.forEach(visit);
            }
        };
        visit(tree);
    };
};

export default function BlogPostEditor({ params }: { params: Promise<{ slug: string }> }) {
    const router = useRouter();
    // Next.js 16: params is a Promise. Unwrap it with React.use()
    const { slug: paramSlug } = use(params);
    const isNew = paramSlug === 'new';

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [summary, setSummary] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('# Blog Content');
    const [imageUrl, setImageUrl] = useState('');

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

    const uploadImageCommand = {
        name: 'upload-image',
        keyCommand: 'upload-image',
        buttonProps: { 'aria-label': 'Upload Image', title: 'Upload Image' },
        icon: (
            <svg width="12" height="12" viewBox="0 0 20 20">
                <path fill="currentColor" d="M15 10c.553 0 1 .448 1 1v6c0 .552-.447 1-1 1H5c-.553 0-1-.448-1-1v-6c0-.552.447-1 1-1h2V7c0-2.761 2.239-5 5-5s5 2.239 5 5v3h2zm-4 0V7c0-1.657-1.343-3-3-3S5 5.343 5 7v3h6zm-4 4v2h2v-2H7z" />
            </svg>
        ),
        execute: (state: any, api: any) => {
            document.getElementById('blog-editor-image-upload')?.click();
        },
    };

    const customCommands = commands.getCommands ? [...commands.getCommands(), uploadImageCommand] : [];

    useEffect(() => {
        if (!isNew) {
            fetch(`${API_BASE}/blog/${paramSlug}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setSlug(data.slug);
                    setSummary(data.summary);
                    setTags(data.tags ? data.tags.join(', ') : '');
                    setContent(data.content || '');
                    setImageUrl(data.imageUrl || '');
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Failed to load blog post', err);
                    setLoading(false);
                });
        }
    }, [isNew, paramSlug, API_BASE]);

    const handleSave = async () => {
        setSaving(true);
        const method = isNew ? 'POST' : 'PUT';
        const url = isNew ? `${API_BASE}/blog` : `${API_BASE}/blog/${paramSlug}`;

        const payload = {
            title,
            slug: slug || title.toLowerCase().replace(/ /g, '-'),
            summary,
            tags: tags.split(',').map(t => t.trim()).filter(t => t),
            content,
            imageUrl,
            publishedAt: isNew ? new Date().toISOString() : undefined // Only set on create for now
        };

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                alert('Post Saved!');
                router.push('/admin');
                router.refresh();
            } else {
                alert('Failed to save');
            }
        } catch (e) {
            console.error(e);
            alert('Error saving post');
        } finally {
            setSaving(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch(`${API_BASE}/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Upload failed response:', res.status, errorText);
                throw new Error(`Upload failed: ${res.status} ${errorText}`);
            }

            const data = await res.json();
            setImageUrl(data.url);
        } catch (err) {
            console.error('Error uploading image:', err);
            alert('Failed to upload image');
        }
    };

    if (loading) return <div className="p-10">Loading Editor...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'New Blog Post' : 'Edit Blog Post'}</h1>
                    <div className="flex gap-4">
                        <Link href="/admin" className="px-4 py-2 text-gray-600 hover:text-gray-900">Cancel</Link>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-6 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 disabled:opacity-50 transition"
                        >
                            {saving ? 'Saving...' : 'Save Post'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Slug (auto-generated if empty)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Summary</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition h-20 resize-none"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="Next.js, Tutorial"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Main Image</label>
                        <div className="space-y-3">
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Enter URL or upload file..."
                            />
                            <div className="flex items-center gap-4">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-pink-50 file:text-pink-700
                                    hover:file:bg-pink-100"
                                />
                                {imageUrl ? (
                                    <div className="size-20 relative border rounded bg-gray-50 overflow-hidden flex-shrink-0">
                                        <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content (Markdown)</label>
                    <div data-color-mode="light">
                        <MDEditor
                            value={content}
                            onChange={(val) => setContent(val || '')}
                            height={500}
                            previewOptions={{
                                remarkPlugins: [[removeEmptyImageRemark]],
                                rehypePlugins: [[rehypeSanitize]],
                            }}
                            textareaProps={{
                                placeholder: 'Write your content here...'
                            }}
                            commands={customCommands}
                            onPaste={async (event) => {
                                const items = event.clipboardData.items;
                                for (const item of items) {
                                    if (item.kind === 'file' && item.type.startsWith('image/')) {
                                        event.preventDefault();
                                        const file = item.getAsFile();
                                        if (!file) continue;

                                        const formData = new FormData();
                                        formData.append('image', file);

                                        try {
                                            const res = await fetch(`${API_BASE}/upload`, {
                                                method: 'POST',
                                                body: formData,
                                            });

                                            if (!res.ok) throw new Error('Upload failed');

                                            const data = await res.json();
                                            const imageUrl = data.url;

                                            const markdown = `![image](${imageUrl})`;
                                            setContent((prev) => prev ? prev + '\n' + markdown : markdown);
                                        } catch (e) {
                                            console.error('Paste upload failed', e);
                                            alert('Failed to upload pasted image');
                                        }
                                    }
                                }
                            }}
                        />
                        <input
                            type="file"
                            id="blog-editor-image-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;

                                const formData = new FormData();
                                formData.append('image', file);

                                try {
                                    const res = await fetch(`${API_BASE}/upload`, {
                                        method: 'POST',
                                        body: formData,
                                    });

                                    if (!res.ok) throw new Error('Upload failed');

                                    const data = await res.json();
                                    const imageUrl = data.url;

                                    const markdown = `![image](${imageUrl})`;
                                    setContent((prev) => prev ? prev + '\n' + markdown : markdown);
                                } catch (err) {
                                    console.error('Button upload failed', err);
                                    alert('Failed to upload image');
                                } finally {
                                    e.target.value = ''; // Reset input
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
