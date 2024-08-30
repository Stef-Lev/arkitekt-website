import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Container from '@/components/container/container';
import Image from 'next/image';
import Genres from '@/components/genres/genres';

const AboutPage = () => {
  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col lg:flex-row h-full p-4 gap-6">
          <div className="flex justify-center items-center h-full flex-[35%] md:flex-[45%] lg:flex-[35%]">
            <Image
              className="ratio-[2/3] rounded-md md:w-[400px]"
              width={300}
              height={300}
              src="/arkitekt.png"
              alt="arkitekt photo"
            />
          </div>
          <div className="h-full flex-[65%] md:flex-[55%] lg:flex-[65%] text-white text-[22px]">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              ipsa tempore sed beatae amet magnam qui odio, deleniti
              perspiciatis ut molestiae harum. Dicta quisquam dolorem mollitia.
              Quam voluptates pariatur a delectus accusantium voluptatem ullam
              nesciunt qui vitae quisquam sint eos ea modi consequuntur
              distinctio, facilis natus. Doloremque mollitia quam eius dicta
              rem, quaerat repellendus id tempore laudantium natus deleniti
              reprehenderit, repudiandae aspernatur. Sequi neque possimus dicta,
              aliquid deserunt dolores pariatur molestias iste ipsa aut, ea sed
              harum ab asperiores voluptates, repudiandae atque officia suscipit
              aspernatur unde laborum? Accusantium, architecto aperiam eaque sit
              nam corrupti impedit voluptas ex fugiat facere similique.
            </div>
          </div>
        </div>
        <Genres />
      </Container>
    </PageWrapper>
  );
};

export default AboutPage;
