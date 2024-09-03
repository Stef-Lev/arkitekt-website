import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Container from '@/components/container/container';
import Image from 'next/image';
import Genres from '@/components/genres/genres';
import { cn } from '@/helpers/classnames';
import content from '@/content/content';

const AboutPage = () => {
  const aboutText = content.aboutPage.introText;
  return (
    <PageWrapper>
      <Container>
        <div className={cn('flex flex-col lg:flex-row', 'h-full p-4 gap-6')}>
          <div
            className={cn(
              'flex justify-center items-center',
              'flex-[35%] md:flex-[45%] lg:flex-[35%]',
              'h-full',
            )}
          >
            <Image
              className="rounded-md"
              width={384}
              height={576}
              src="/arkitekt.png"
              alt="arkitekt photo"
            />
          </div>
          <div
            className={cn(
              'flex-[65%] md:flex-[55%] lg:flex-[65%]',
              'h-full text-white',
              'text-[22px] lg:text-[30px]',
            )}
          >
            <p>{aboutText}</p>
          </div>
        </div>
        <Genres />
      </Container>
    </PageWrapper>
  );
};

export default AboutPage;
