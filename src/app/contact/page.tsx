import Contact from '@/components/contact/contact';
import TitleHeader from '@/components/title-header/title-header';

const ContactPage = () => {
  return (
    <>
      <TitleHeader title="Contact" />
      <div className="relative top-[220px] flex justify-center w-full">
        <div className="w-full md:w-[678px]">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
