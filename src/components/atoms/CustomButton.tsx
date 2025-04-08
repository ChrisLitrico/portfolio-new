import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary';

type Custombutton = {
  title: string;
  id: string;
  containerClass: string;
  cursorPointer?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
};
const CustomButton = ({
  title,
  id,
  leftIcon,
  rightIcon,
  containerClass,
  cursorPointer,
  onClick,
  variant = 'primary',
}: Custombutton) => {
  const buttonStyles = {
    primary: 'bg-violet-50 text-neutral-800 px-6 py-4',
    secondary: 'bg-violet-300 text-violet-50 py-2', // Different styling for secondary
  };
  return (
    <button
      id={id}
      className={clsx(
        'group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full ',
        buttonStyles[variant],
        containerClass,
      )}
      onClick={onClick}
    >
      {leftIcon}
      <span
        className={`relative incline-flex overflow-hidden font-general mx-4 text-xs uppercase ${cursorPointer ? 'cursor-pointer' : ''}`}
      >
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};
export default CustomButton;
