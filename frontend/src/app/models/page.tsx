'use client';

const integrations = [
  { name: 'OpenAI', desc: 'GPT models' },
  { name: 'Anthropic', desc: 'Claude models' },
  { name: 'Google', desc: 'Gemini models' },
  { name: 'Meta', desc: 'Llama models' }
];

export default function ModelIntegrations() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">AI Models</h1>
          <p className="text-xl text-gray-400">Supported AI models</p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((int, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold">{int.name}</h3>
                <p className="text-gray-400">{int.desc}</p>
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