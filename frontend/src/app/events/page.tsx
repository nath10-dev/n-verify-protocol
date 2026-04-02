'use client';

import { useState } from 'react';

const events = [
  {
    title: 'AI Verification Summit 2026',
    date: 'April 15, 2026',
    location: 'San Francisco, CA',
    type: 'Conference',
    image: '🎤'
  },
  {
    title: 'N-Verify API Workshop',
    date: 'April 22, 2026',
    location: 'Online',
    type: 'Webinar',
    image: '💻'
  },
  {
    title: 'Healthcare AI Panel',
    date: 'May 5, 2026',
    location: 'New York, NY',
    type: 'Panel',
    image: '🏥'
  },
  {
    title: 'Developer Meetup',
    date: 'May 12, 2026',
    location: 'Austin, TX',
    type: 'Meetup',
    image: '👥'
  }
];

const pastEvents = [
  { title: 'Launch Day', date: 'March 1, 2026', attendees: '500+' },
  { title: 'Beta Tester Meetup', date: 'Feb 15, 2026', attendees: '150+' },
  { title: 'API Beta Release', date: 'Jan 20, 2026', attendees: '300+' }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-gray-400">Join us at upcoming events or watch recordings</p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-5xl">{event.image}</div>
                <div className="flex-1">
                  <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded">{event.type}</span>
                  <h3 className="text-lg font-bold mt-2 mb-1">{event.title}</h3>
                  <div className="text-gray-400 text-sm">
                    <div>📅 {event.date}</div>
                    <div>📍 {event.location}</div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-sky-500 text-black text-sm rounded-lg hover:bg-sky-400">
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Past Events</h2>
          <div className="space-y-3">
            {pastEvents.map((event, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="text-gray-400 text-sm">{event.date}</div>
                </div>
                <span className="text-sky-400">{event.attendees} attendees</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Event Updates</h2>
          <p className="text-gray-400 mb-6">Be the first to know about upcoming events.</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-sky-500"
            />
            <button className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500">
        © 2026 N-Verify Protocol
      </footer>
    </div>
  );
}