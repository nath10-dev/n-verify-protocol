'use client';

import { useState } from 'react';

const courses = [
  { title: 'Introduction to AI Verification', level: 'Beginner', duration: '2 hours', lessons: 12 },
  { title: 'Medical AI Verification', level: 'Intermediate', duration: '4 hours', lessons: 24 },
  { title: 'Legal AI Verification', level: 'Intermediate', duration: '3 hours', lessons: 18 },
  { title: 'Financial AI Verification', level: 'Intermediate', duration: '3 hours', lessons: 20 },
  { title: 'Advanced Verification API', level: 'Advanced', duration: '6 hours', lessons: 36 }
];

const progress = [
  { course: 'Introduction to AI Verification', percent: 75 },
  { course: 'Medical AI Verification', percent: 30 }
];

export default function Academy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">N-Verify Academy</h1>
          <p className="text-xl text-gray-400">Learn AI verification with expert-led courses</p>
        </div>
      </section>

      {/* In Progress */}
      {progress.length > 0 && (
        <section className="py-12 bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
            <div className="space-y-4">
              {progress.map((p, i) => (
                <div key={i} className="p-4 bg-sky-500/10 border border-sky-500/30 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{p.course}</span>
                    <span className="text-sky-400">{p.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div className="bg-sky-500 h-2 rounded-full" style={{ width: `${p.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Courses */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">All Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-sky-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded">{course.level}</span>
                  <span className="text-gray-500 text-xs">{course.duration}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <div className="text-gray-400 text-sm mb-4">{course.lessons} lessons</div>
                <button className="w-full py-2 bg-white/10 rounded-lg hover:bg-white/20 text-sm">
                  Start Course
                </button>
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