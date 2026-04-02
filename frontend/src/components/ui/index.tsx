// Reusable UI Components

// Button Component
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}) {
  const baseStyles = 'font-medium rounded-xl transition-all inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-sky-500 text-black hover:bg-sky-400',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
    danger: 'bg-red-500 text-white hover:bg-red-400'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loading ? 'opacity-50 cursor-wait' : ''}`}
      disabled={loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}

// Input Component
export function Input({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      )}
      <input
        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors ${
          error ? 'border-red-500' : 'border-white/10'
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}

// Card Component
export function Card({ 
  children, 
  className = '' 
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

// Badge Component
export function Badge({ 
  children, 
  variant = 'default' 
}: { 
  children: React.ReactNode; 
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}) {
  const variants = {
    default: 'bg-white/10 text-gray-300',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/20 text-red-400',
    info: 'bg-sky-500/20 text-sky-400'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}

// Loading Spinner
export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12' };
  
  return (
    <svg className={`animate-spin ${sizes[size]} text-sky-500`} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

// Modal Component
export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title?: string; 
  children: React.ReactNode;
}) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 border border-white/10 rounded-2xl p-6 max-w-lg w-full mx-4">
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// Avatar Component
export function Avatar({ 
  src, 
  name, 
  size = 'md' 
}: { 
  src?: string; 
  name: string; 
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizes = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-14 w-14 text-lg' };
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  
  return src ? (
    <img src={src} alt={name} className={`${sizes[size]} rounded-full object-cover`} />
  ) : (
    <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center font-bold text-black`}>
      {initials}
    </div>
  );
}

// Progress Bar
export function Progress({ value, max = 100 }: { value: number; max?: number }) {
  const percentage = Math.min(100, (value / max) * 100);
  
  return (
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div 
        className="bg-sky-500 h-2 rounded-full transition-all" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

// Tabs Component
export function Tabs({ 
  tabs, 
  activeTab, 
  onChange 
}: { 
  tabs: { id: string; label: string }[]; 
  activeTab: string; 
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex gap-1 bg-white/5 p-1 rounded-xl">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === tab.id 
              ? 'bg-sky-500 text-black' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}