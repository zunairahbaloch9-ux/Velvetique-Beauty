import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let colorClasses = 'bg-[#2A1E20] text-white border-[#4A3236]';
        let iconColor = 'text-[#EAB6BC]';

        if (toast.type === 'warning') {
          Icon = AlertCircle;
          colorClasses = 'bg-amber-950 text-white border-amber-800';
          iconColor = 'text-amber-400';
        } else if (toast.type === 'info') {
          Icon = Info;
          colorClasses = 'bg-[#312528] text-white border-[#4A3539]';
          iconColor = 'text-sky-300';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-xl shadow-xl border text-xs sm:text-sm font-sans animate-in slide-in-from-bottom-3 duration-300 ${colorClasses}`}
          >
            <div className="flex items-center gap-2.5">
              <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} />
              <span className="font-medium tracking-wide">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 hover:bg-white/10 rounded-full text-stone-300 hover:text-white transition-colors ml-2"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
