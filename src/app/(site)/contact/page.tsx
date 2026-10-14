import Contact from '@/components/contact-form/contact/contact';
import TitleHeader from '@/components/title-header/title-header';
import PageWrapper from '@/components/page-wrapper/page-wrapper';
import content from '@/content/content';
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <PageWrapper>
      <TitleHeader title={content.contactPage.title} />
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <Contact />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
