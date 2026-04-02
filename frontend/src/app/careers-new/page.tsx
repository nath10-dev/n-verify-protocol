'use client';

import { useState } from 'react';

const jobs = [
  { id: 1, title: 'Senior Backend Engineer', dept: 'Engineering', location: 'Remote', type: 'Full-time', applicants: 45 },
  { id: 2, title: 'Frontend Developer', dept: 'Engineering', location: 'Remote', type: 'Full-time', applicants: 32 },
  { id: 3, title: 'AI/ML Engineer', dept: 'AI Research', location: 'San Francisco', type: 'Full-time', applicants: 28 },
  { id: 4, title: 'DevOps Engineer', dept: 'Infrastructure', location: 'Remote', type: 'Full-time', applicants: 19 },
  { id: 5, title: 'Technical Writer', dept: 'Product', location: 'Remote', type: 'Contract', applicants: 12 }
];

const stats = [
  { value: '50+', label: 'Open Positions' },
  { value: '500+', label: 'Applicants' },
  { value: '25', label: 'Countries' },
  { value: '100%', label: 'Remote' }
];

export default function CareersNew() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Join the Team</h1>
          <p className="text-xl text-gray-400 mb-8">Help us build the future of AI verification</p>
          
          <div className="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-sky-400">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-3">
            {['all', 'Engineering', 'AI Research', 'Infrastructure', 'Product'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  filter === f ? 'bg-sky-500 text-black' : 'bg-white/10 text-gray-400'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {jobs.filter(j => filter === 'all' || j.dept === filter).map(job => (
              <div key={job.id} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <div className="flex gap-4 text-gray-400 text-sm">
                      <span>{job.dept}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sky-400 font-bold">{job.applicants}</div>
                    <div className="text-gray-500 text-sm">applicants</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}