import LinkProfileImage from '@/components/links-page/link-profile-image/link-profile-image';
import LinkItem from '@/components/links-page/link-item/link-item';
import Image from 'next/image';
import type { Content } from '@/content/types';
import styles from './links-page-content.module.css';

export type Props = {
  content: Content['linkPage'];
};

const LinksPageContent = ({ content }: Props) => {
  const { profileImage, logoImage, title, sections } = content;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LinkProfileImage imageSrc={profileImage} />
        <Image
          className={styles.logoImage}
          src={logoImage}
          alt="logo"
          width={150}
          height={150}
        />
        <div className={styles.title}>{title}</div>
        {Object.values(sections).map((section, index) => {
          if (!section.items || section.items.length === 0) {
            return null;
          }
          return (
            <div key={index} className={styles.section}>
              {section.title && (
                <div className={styles.sectionTitle}>{section.title}</div>
              )}
              <div className={styles.sectionList}>
                {section.items?.map((link, linkIndex) => (
                  <LinkItem key={linkIndex} link={link} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LinksPageContent;
