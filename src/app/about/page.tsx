import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Container from '@/components/container/container';
import Genres from '@/components/genres/genres';
import content from '@/content/content';
import AboutSection from '@/components/about-section/about-section';

const AboutPage = () => {
  const aboutText = content.aboutPage.introText;
  return (
    <PageWrapper>
      <Container>
        <AboutSection aboutText={aboutText} />
        <Genres
          title="GENRES"
          subtitle="Select a genre and listen to the beats playlist"
          type="images"
          isInteractive
        />
      </Container>
    </PageWrapper>
  );
};

export default AboutPage;
