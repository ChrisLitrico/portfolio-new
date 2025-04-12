import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary';

type BaseButtonProps = {
  variant: ButtonVariant;
  containerClass?: string;
  onClick?: () => void;
};

type PrimaryButtonProps = BaseButtonProps & {
  variant: 'primary';
  title: string;
  id?: string;
  cursorPointer?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

type SecondaryButtonProps = BaseButtonProps & {
  variant: 'secondary';
  href: string;
  src?: string;
  altText?: string;
  title?: string;
};

type CustomButtonProps = PrimaryButtonProps | SecondaryButtonProps;

const CustomButton = (props: CustomButtonProps) => {
  const buttonStyles = {
    primary: 'bg-violet-300 text-neutral-800 px-6 py-4',
    secondary:
      'w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300',
  };
  if (props.variant === 'secondary') {
    return (
      <div>
        <a
          href={props.href}
          className={clsx(
            buttonStyles.secondary,
            props.containerClass,
            'block overflow-hidden',
          )}
          onClick={props.onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative">
            {props.src && (
              <span>
                <img
                  src={props.src}
                  alt={props.altText || 'Card cover image'}
                  className="w-full h-48 mb-2 object-cover transition-transform duration-300 md:hover:scale-110"
                  loading="lazy"
                />
              </span>
            )}
            {props.title && (
              <div className="p-4 bg-stone-100 border-stone-100">
                <h3
                  className={`text-lg font-semibold rounded-md text-neutral-800 md:hover:text-violet-300 ${!props.src ? 'transition-transform duration-300 md:hover:scale-130' : ''}`}
                >
                  {props.title}
                </h3>
              </div>
            )}
          </div>
        </a>
      </div>
    );
  }
  return (
    <button
      id={props.id}
      className={clsx(
        'group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full',
        buttonStyles.primary,
        props.containerClass,
      )}
      onClick={props.onClick}
    >
      {props.leftIcon}
      <span
        className={`relative inline-flex overflow-hidden font-general mx-4 text-xs uppercase ${
          props.cursorPointer ? 'cursor-pointer' : ''
        }`}
      >
        <div>{props.title}</div>
      </span>
      {props.rightIcon}
    </button>
  );
};

export default CustomButton;
