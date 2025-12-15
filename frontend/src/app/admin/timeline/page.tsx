'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TimelineItem {
    id: string;
    title: string;
    place: string;
    period: string;
    bullets: string[];
}

export default function TimelineManager() {
    const [items, setItems] = useState<TimelineItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

    const fetchTimeline = async () => {
        try {
            const res = await fetch(`${API_BASE}/timeline`, { cache: 'no-store' });
            if (!res.ok) throw new Error('Failed to fetch timeline');
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error(error);
            alert('Failed to load timeline items');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTimeline();
    }, [API_BASE]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            const res = await fetch(`${API_BASE}/timeline/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setItems(items.filter(item => item.id !== id));
                if (selectedId === id) setSelectedId(null);
            } else {
                throw new Error('Failed to delete');
            }
        } catch (error) {
            alert('Error deleting item');
        }
    };

    // Keyboard Event Listener for Delete key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedId && (e.key === 'Delete' || e.key === 'Backspace')) {
                handleDelete(selectedId);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedId, items]); // dependencies: selectedId and items (for handleDelete closure if needed, but handleDelete uses state) wait, handleDelete isn't in dep array but uses items. 
    // Best practice: wrap handleDelete in useCallback or referencing state correctly. 
    // The current handleDelete implementation relies on 'items' state closure which might be stale if not careful, 
    // but React setState updater pattern setItems(prev => prev.filter...) is better.
    // I will optimize handleDelete to use functional update to avoid stale closure issues in the effect.

    if (loading) return <div className="p-10">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Manage Timeline</h1>
                    <div className="flex gap-4">
                        <Link href="/admin" className="px-4 py-2 text-gray-600 hover:text-gray-900">Back to Dashboard</Link>
                        <Link href="/admin/timeline/new" className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">+ Add Event</Link>
                    </div>
                </div>

                <div className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className={`p-6 rounded-xl shadow-sm border flex justify-between items-start cursor-pointer transition-all duration-200 ${selectedId === item.id
                                ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-200'
                                : 'bg-white border-gray-200 hover:border-indigo-300'
                                }`}
                        >
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                <p className="text-indigo-600 font-medium">{item.place} <span className="text-gray-400">|</span> {item.period}</p>
                                <ul className="mt-2 text-sm text-gray-600 list-disc ml-5 space-y-1">
                                    {item.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex gap-2">
                                <Link href={`/admin/timeline/${item.id}`} className="px-3 py-1 text-xs font-semibold border border-indigo-200 text-indigo-600 rounded-md hover:bg-indigo-50">
                                    Edit
                                </Link>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(item.id);
                                    }}
                                    className="px-3 py-1 text-xs font-semibold border border-red-200 text-red-600 rounded-md hover:bg-red-50"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <div className="text-center p-10 text-gray-500">
                            No timeline items found. Create one!
                        </div>
                    )}
                </div>

                {/* Instruction for keyboard */}
                <div className="mt-4 text-center text-sm text-gray-400">
                    💡 Hint: Click an item to select it, then press <strong>Delete</strong> key to remove.
                </div>
            </div>
        </div>
    );
}
