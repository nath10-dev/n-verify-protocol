'use client';

import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Senior Backend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable APIs and blockchain integrations.',
    requirements: ['5+ years backend experience', 'Node.js/TypeScript', 'Blockchain experience', 'Experience with AI/ML']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful, performant user interfaces.',
    requirements: ['3+ years React experience', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    id: 3,
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Develop AI verification models and reasoning extraction.',
    requirements: ['PhD in ML/AI', 'LLM experience', 'NLP expertise', 'Python proficiency']
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage cloud infrastructure and CI/CD pipelines.',
    requirements: ['AWS/GCP experience', 'Kubernetes', 'Docker', 'CI/CD pipelines']
  },
  {
    id: 5,
    title: 'Technical Writer',
    department: 'Product',
    location: 'Remote',
    type: 'Contract',
    description: 'Create documentation and developer guides.',
    requirements: ['Technical writing experience', 'API documentation', 'Developer experience', 'Attention to detail']
  },
  {
    id: 6,
    title: 'Security Engineer',
    department: 'Security',
    location: 'Remote',
    type: 'Full-time',
    description: 'Ensure platform security and compliance.',
    requirements: ['Security certifications', 'Penetration testing', 'Cryptography', 'Compliance frameworks']
  }
];

const benefits = [
  { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical, dental, and vision' },
  { icon: '🏝️', title: 'Unlimited PTO', description: 'Take time when you need it' },
  { icon: '💰', title: 'Competitive Salary', description: 'Market-leading compensation' },
  { icon: '📈', title: 'Equity', description: 'Ownership in the company' },
  { icon: '🏠', title: 'Remote First', description: 'Work from anywhere' },
  { icon: '📚', title: 'Learning Budget', description: 'Conference tickets and courses' }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join the
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Help us build the future of AI verification.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-1 space-y-4">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`w-full text-left p-4 rounded-xl border transition-colors ${
                    selectedJob.id === job.id
                      ? 'bg-sky-500/20 border-sky-500'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="font-semibold">{job.title}</div>
                  <div className="text-sm text-gray-400">{job.department} • {job.location}</div>
                </button>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
                    <div className="flex gap-4 text-gray-400">
                      <span>{selectedJob.department}</span>
                      <span>•</span>
                      <span>{selectedJob.location}</span>
                      <span>•</span>
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">About the Role</h4>
                  <p className="text-gray-400">{selectedJob.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-400">
                        <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
          <p className="text-xl text-gray-400 mb-8">
            We believe in building great products while maintaining a healthy work-life balance. 
            Our team is passionate about solving hard problems and making AI more trustworthy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-semibold">Mission Driven</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-semibold">Collaborative</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-semibold">Innovation First</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          © 2026 N-Verify Protocol. All rights reserved.
        </div>
      </footer>
    </div>
  );
}