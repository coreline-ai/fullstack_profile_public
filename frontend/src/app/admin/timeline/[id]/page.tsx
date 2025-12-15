'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TimelineEditor({ params }: { params: { id: string } }) {
    const router = useRouter();
    const isNew = params.id === 'new';

    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [period, setPeriod] = useState('');
    const [bulletsRaw, setBulletsRaw] = useState('');

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

    useEffect(() => {
        if (!isNew) {
            // Since we don't have a getById endpoint, we fetch all and find
            // In a larger app, we should make a dedicated endpoint.
            fetch(`${API_BASE}/timeline`)
                .then(res => res.json())
                .then((data: any[]) => {
                    const item = data.find(i => i.id === params.id);
                    if (item) {
                        setTitle(item.title);
                        setPlace(item.place);
                        setPeriod(item.period);
                        setBulletsRaw(item.bullets.join('\n'));
                    } else {
                        alert('Item not found');
                        router.push('/admin/timeline');
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [isNew, params.id, API_BASE, router]);

    const handleSave = async () => {
        setSaving(true);
        const method = isNew ? 'POST' : 'PUT';
        const url = isNew ? `${API_BASE}/timeline` : `${API_BASE}/timeline/${params.id}`;

        const payload = {
            title,
            place,
            period,
            bullets: bulletsRaw.split('\n').map(b => b.trim()).filter(b => b)
        };

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                router.push('/admin/timeline');
                router.refresh();
            } else {
                alert('Failed to save');
            }
        } catch (e) {
            console.error(e);
            alert('Error saving');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-10">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'Add Event' : 'Edit Event'}</h1>
                    <div className="flex gap-4">
                        <Link href="/admin/timeline" className="px-4 py-2 text-gray-600 hover:text-gray-900">Cancel</Link>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 transition"
                        >
                            {saving ? 'Saving...' : 'Save Component'}
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title (Role)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Senior Engineer"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Place (Company)</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            placeholder="TechCorp Inc."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            placeholder="2020 - Present"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bullets (One per line)</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition h-32 resize-none"
                            value={bulletsRaw}
                            onChange={(e) => setBulletsRaw(e.target.value)}
                            placeholder="- Led team of 5..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
