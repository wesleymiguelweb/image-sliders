import { cn } from '../../utils/cn.js';

export default function IconButton(props) {
  const { icon, label, iconSize = 18, className, ...rest } = props;
  const Icon = icon;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        'grid place-items-center rounded-xl border border-line bg-surface text-mauve shadow-sm transition hover:bg-surface-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve',
        className,
      )}
      {...rest}
    >
      <Icon aria-hidden="true" size={iconSize} strokeWidth={2.25} />
    </button>
  );
}
