import Contact from '@/components/contact/contact';
import TitleHeader from '@/components/title-header/title-header';
import PageWrapper from '@/components/page-wrapper/page-wrapper';

const ContactPage = () => {
  return (
    <PageWrapper>
      <TitleHeader title="Contact" />
      <div className="flex justify-center w-full py-8">
        <div className="w-[90%] md:w-[678px]">
          <Contact />
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
