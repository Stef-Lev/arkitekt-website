import Contact from '@/components/contact/contact';
import TitleHeader from '@/components/title-header/title-header';

const ContactPage = () => {
  return (
    <>
      <TitleHeader title="Contact" />
      <div className="relative flex justify-center w-full py-8">
        <div className="w-[90%] md:w-[678px]">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
