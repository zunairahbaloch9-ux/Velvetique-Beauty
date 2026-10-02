import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube, Clock, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ContactPage: React.FC = () => {
  const { addToast } = useShop();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      addToast('Please complete the required fields', 'warning');
      return;
    }
    setSubmitted(true);
    addToast('Thank you! Your message has been sent to our customer care team.', 'success');
  };

  return (
    <div className="bg-[#FAF7F5] min-h-screen py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#93444B] uppercase">
            We Are Here For You
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#2A1E20] tracking-tight mt-1 mb-2">
            GET IN TOUCH
          </h1>
          <p className="text-xs sm:text-sm text-[#735D62] font-light leading-relaxed">
            Have questions regarding formulations, shade matching, or your order? Our beauty advisors are ready to assist.
          </p>
          <div className="w-12 h-0.5 bg-[#D19B9E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#EDE1E1] shadow-xs space-y-6">
              <h2 className="font-serif text-2xl font-medium text-[#2A1E20] pb-4 border-b border-[#F0E6E6]">
                Customer Concierge
              </h2>

              <div className="space-y-5 text-xs sm:text-sm text-[#543E42]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F1] text-[#93444B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2A1E20] block">Email Inquiries</span>
                    <a
                      href="mailto:hello@velvetiquebeauty.com"
                      className="text-[#93444B] hover:underline text-xs"
                    >
                      hello@velvetiquebeauty.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F1] text-[#93444B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2A1E20] block">Phone &amp; WhatsApp</span>
                    <a
                      href="tel:+923001234567"
                      className="text-stone-700 hover:text-[#93444B] text-xs font-mono"
                    >
                      +92 300 1234567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F1] text-[#93444B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2A1E20] block">Headquarters</span>
                    <p className="text-stone-600 text-xs">
                      Velvetique Beauty Atelier, Block 4, Clifton, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F1] text-[#93444B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2A1E20] block">Operating Hours</span>
                    <p className="text-stone-600 text-xs">
                      Monday to Saturday: 10:00 AM – 8:00 PM PKT
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media links */}
              <div className="pt-6 border-t border-[#F0E6E6]">
                <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest block mb-3">
                  Connect on Social
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#FAF0F1] text-[#93444B] hover:bg-[#2A1E20] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#FAF0F1] text-[#93444B] hover:bg-[#2A1E20] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#FAF0F1] text-[#93444B] hover:bg-[#2A1E20] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EDE1E1] shadow-xs">
              <h2 className="font-serif text-2xl font-medium text-[#2A1E20] mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#735D62] font-light mb-6">
                Fill in the details below and a personal beauty advisor will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF0F1] border border-[#F0DADE] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#2A1E20]">Message Dispatched!</h3>
                  <p className="text-xs text-[#6E4F55] max-w-sm mx-auto">
                    Thank you, {name}. Your inquiry has been routed to our beauty support team. We will contact you at {email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-6 py-2 bg-[#2A1E20] text-white text-xs font-semibold rounded-full"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#543E42] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Ahmed"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#543E42] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#543E42] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#543E42] mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Order status / Product consultation"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#543E42] mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please let us know how we can assist your beauty ritual..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F5] border border-[#DDD0D2] rounded-xl focus:outline-none focus:border-[#93444B] focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs sm:text-sm font-semibold tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
