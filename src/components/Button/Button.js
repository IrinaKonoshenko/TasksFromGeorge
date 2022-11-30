import clsx from 'clsx';

export const Button = ({
  text,
  size = 'medium',
  onClick,
  variant = 'solid',
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx([
        'rounded text-base leading-[18px] hover:bg-blue-900 hover:text-white hover:ring-blue-900 transition',
        {
          'px-4 py-[15px]': size === 'large',
          'px-3 py-[11px]': size === 'medium',
          'px-3 py-[7px]': size === 'small',
        },
        {
          'bg-primary text-white ': variant === 'solid',
          'bg-white ring-primary ring-2 ring-inset text-primary':
            variant === 'outlined',
          'text-primary': variant === 'text',
        },
      ])}
    >
      {text}
    </button>
  );
};
