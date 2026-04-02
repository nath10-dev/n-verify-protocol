'use client';

export default function FeatureComparison() {
  const features = [
    { name: 'Verifications/month', free: '100', pro: '10,000', enterprise: 'Unlimited' },
    { name: 'Domains', free: '1', pro: '3', enterprise: 'Custom' },
    { name: 'AI Analysis', free: 'Basic', pro: 'Advanced', enterprise: 'Custom AI' },
    { name: 'Certificate NFT', free: false, pro: true, enterprise: true },
    { name: 'API Access', free: false, pro: true, enterprise: true },
    { name: 'Team Members', free: '1', pro: '5', enterprise: 'Unlimited' },
    { name: 'Priority Support', free: false, pro: true, enterprise: true },
    { name: 'Custom Integrations', free: false, pro: false, enterprise: true },
    { name: 'SLA Guarantee', free: false, pro: false, enterprise: true },
    { name: 'Dedicated Account Manager', free: false, pro: false, enterprise: true },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Compare Plans</h1>
        <p className="text-gray-400 text-center mb-12">Choose the perfect plan for your needs</p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 font-medium text-gray-400">Feature</th>
                <th className="text-center p-4">
                  <div className="text-lg font-bold">Free</div>
                  <div className="text-2xl font-bold">$0</div>
                </th>
                <th className="text-center p-4 bg-sky-500/10 rounded-t-xl">
                  <div className="text-lg font-bold">Pro</div>
                  <div className="text-2xl font-bold">$99<span className="text-sm text-gray-400">/mo</span></div>
                </th>
                <th className="text-center p-4">
                  <div className="text-lg font-bold">Enterprise</div>
                  <div className="text-2xl font-bold">Custom</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="p-4">{feature.name}</td>
                  <td className="p-4 text-center">
                    {typeof feature.free === 'boolean' ? (
                      feature.free ? <span className="text-green-400">✓</span> : <span className="text-gray-500">—</span>
                    ) : <span>{feature.free}</span>}
                  </td>
                  <td className="p-4 text-center bg-sky-500/5">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? <span className="text-green-400">✓</span> : <span className="text-gray-500">—</span>
                    ) : <span>{feature.pro}</span>}
                  </td>
                  <td className="p-4 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? <span className="text-green-400">✓</span> : <span className="text-gray-500">—</span>
                    ) : <span>{feature.enterprise}</span>}
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