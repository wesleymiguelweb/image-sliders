import { cn } from '../../utils/cn.js';
import { MapPin } from 'lucide-react';

export default function Pill({ children, icon: Icon = MapPin, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-mauve shadow-sm backdrop-blur',
        className,
      )}
    >
      {Icon && <Icon aria-hidden="true" size={13} strokeWidth={2.5} />}
      {children}
    </span>
  );
}
