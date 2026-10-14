import { useEffect } from 'react';
import { cn } from '@/helpers/classnames';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SocialMedia from '@/components/social-media/social-media';
import { Props } from './drawer.types';
import styles from './drawer.module.css';

const Drawer = (props: Props) => {
  const { isDrawerOpen, toggleDrawer, items, className } = props;
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const handleClick = (href: string) => {
    router.push(href);
    toggleDrawer();
  };
  return (
    <div
      className={cn(
        styles.drawer,
        [isDrawerOpen, styles.open, styles.closed],
        className,
      )}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <Image
            src="/website-logo.png"
            alt="arkitekt logo"
            className={styles.logo}
            width={120}
            height={110}
            onClick={() => handleClick('/')}
          />
        </div>

        <div className={styles.navigation}>
          <nav>
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <div
                    className={styles.navigationLink}
                    onClick={() => handleClick(item.href)}
                  >
                    {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Drawer;
