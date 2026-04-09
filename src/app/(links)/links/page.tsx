import content from '@/content/content';
import LinksPageContent from '@/components/pages-content/links-page-content/links-page-content';

const pageContent = content.linkPage;

const LinksPage = () => {
  return <LinksPageContent content={pageContent} />;
};

export default LinksPage;
