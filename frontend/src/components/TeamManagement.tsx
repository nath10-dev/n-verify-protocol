'use client';

import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  status: 'active' | 'pending';
}

export default function TeamManagement() {
  const [members] = useState<TeamMember[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'member', status: 'active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'viewer', status: 'pending' },
  ]);

  const getRoleColor = (role: string) => {
    switch(role) {
      case 'admin': return 'bg-purple-500/20 text-purple-400';
      case 'member': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Team Management</h1>
          <button className="px-4 py-2 bg-sky-500 text-black rounded-lg font-medium hover:bg-sky-400">
            + Invite Member
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-gray-400 font-medium">Member</th>
                <th className="text-left p-4 text-gray-400 font-medium">Role</th>
                <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member.id} className="border-t border-white/10">
                  <td className="p-4">
                    <div className="font-medium">{member.name}</div>
                    <div className="text-gray-400 text-sm">{member.email}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs capitalize ${getRoleColor(member.role)}`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      member.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-gray-400 hover:text-white mr-3">Edit</button>
                    <button className="text-red-400 hover:text-red-300">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}