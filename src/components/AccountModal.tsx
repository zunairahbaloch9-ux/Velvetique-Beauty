import React, { useState } from 'react';
import { X, User, Lock, Mail, Phone, LogOut, Package, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, user, loginUser, logoutUser, orders, addToast } = useShop();

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPass, setRegPass] = useState('');
  const [regConfirmPass, setRegConfirmPass] = useState('');

  if (!isAccountOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      addToast('Please fill in your email and password', 'warning');
      return;
    }
    const derivedName = email.split('@')[0];
    loginUser(derivedName.charAt(0).toUpperCase() + derivedName.slice(1), email);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPass) {
      addToast('Please complete all required fields', 'warning');
      return;
    }
    if (regPass !== regConfirmPass) {
      addToast('Passwords do not match', 'warning');
      return;
    }
    loginUser(regName, regEmail, regPhone);
  };

  const handleGoogleLogin = () => {
    loginUser('Areeba Khan', 'areeba.khan@example.com', '+92 300 8765432');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 bg-[#2A1E20]/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#EDE1E1] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsAccountOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-[#2A1E20] hover:bg-stone-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* User Profile View */
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-[#F0E6E6]">
              <div className="w-14 h-14 rounded-full bg-[#FAF0F1] text-[#93444B] flex items-center justify-center font-serif text-2xl font-bold border border-[#F2DEE0]">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#2A1E20]">{user.name}</h3>
                <p className="text-xs text-[#826E72]">{user.email}</p>
                {user.phone && <p className="text-xs text-stone-500 mt-0.5">{user.phone}</p>}
              </div>
            </div>

            {/* Orders section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-4 h-4 text-[#93444B]" />
                <h4 className="font-serif text-base font-semibold text-[#2A1E20]">Order History</h4>
              </div>

              {orders.length === 0 ? (
                <div className="p-4 bg-[#FAF7F5] rounded-xl text-center text-xs text-[#826E72]">
                  No orders placed yet. Your purchases will appear here.
                </div>
              ) : (
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="p-3 bg-[#FAF8F8] rounded-xl border border-[#F0E6E6] flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-[#2A1E20]">{order.orderNumber}</span>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          {order.date} · {order.items.length} items
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-[#93444B] tabular-nums">
                          Rs. {order.total.toLocaleString()}
                        </span>
                        <span className="block text-[10px] text-emerald-700 font-semibold">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={logoutUser}
              className="w-full py-2.5 px-4 border border-[#DDD0D2] hover:bg-[#FAF0F1] text-stone-700 hover:text-[#93444B] text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          /* Login & Register Tabs */
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <span className="font-serif text-2xl font-bold tracking-widest text-[#2A1E20] uppercase block">
                VELVETIQUE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#93444B] uppercase font-sans font-medium">
                BEAUTY MEMBERS CLUB
              </span>
            </div>

            {/* Segmented Tab Control */}
            <div className="flex bg-[#FAF0F1] p-1 rounded-xl mb-6">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'login'
                    ? 'bg-white text-[#2A1E20] shadow-xs'
                    : 'text-stone-500 hover:text-[#2A1E20]'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'register'
                    ? 'bg-white text-[#2A1E20] shadow-xs'
                    : 'text-stone-500 hover:text-[#2A1E20]'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Google Quick Sign-in */}
            <button
              onClick={handleGoogleLogin}
              className="w-full py-2.5 px-4 border border-[#DDD0D2] hover:bg-stone-50 rounded-xl text-xs font-medium text-[#2A1E20] flex items-center justify-center gap-3 transition-colors mb-5 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-[#EDE1E1] w-full" />
              <span className="bg-white px-3 text-[11px] text-stone-400 uppercase tracking-wider">
                or with email
              </span>
            </div>

            {/* Login Form */}
            {activeTab === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-[#6D494F]">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded accent-[#93444B]"
                    />
                    <span>Remember me</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => addToast('Password reset link sent to your email!', 'info')}
                    className="text-[#93444B] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  SIGN IN
                </button>
              </form>
            ) : (
              /* Registration Form */
              <form onSubmit={handleRegisterSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Areeba Khan"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="areeba@example.com"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#543E42] mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#543E42] mb-1">
                      Password *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={regPass}
                      onChange={(e) => setRegPass(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#543E42] mb-1">
                      Confirm Pass *
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={regConfirmPass}
                      onChange={(e) => setRegConfirmPass(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
