'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            localStorage.setItem('admin_auth', 'true');
            // Also set a cookie for potential server-side checking if needed later, 
            // but for now client-side localStorage is sufficient for this simple guard.
            document.cookie = "admin_auth=true; path=/";
            router.push('/admin');
        } else {
            alert('Invalid Password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md space-y-4 w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800">Admin Login</h1>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition">
                    Login
                </button>
            </form>
        </div>
    );
}
