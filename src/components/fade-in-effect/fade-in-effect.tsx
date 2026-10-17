import { cn } from '@/helpers/classnames';
import { Props } from './fade-in-effect.types';
import styles from './fade-in-effect.module.css';

const variantStyles = {
  image: styles.image,
  text: styles.text,
  fade: styles.fade,
};

const FadeInEffect = ({ children, variant, className }: Props) => (
  <div className={cn(variantStyles[variant], className)}>{children}</div>
);

export default FadeInEffect;
