'use client';

const tools = [
  { name: 'VS Code', desc: 'Code verification' },
  { name: 'GitHub Actions', desc: 'CI/CD integration' },
  { name: 'Chrome Extension', desc: 'Browser verification' },
  { name: 'Slack Bot', desc: 'Team notifications' }
];

export default function DeveloperTools() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Developer Tools</h1>
          <p className="text-xl text-gray-400">Tools for developers</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold">{tool.name}</h3>
                <p className="text-gray-400">{tool.desc}</p>
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