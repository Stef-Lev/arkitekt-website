import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LinksPageContent from './links-page-content';
import { Props } from './links-page-content.types';

const content: Props['content'] = {
  profileImage: '/about.jpg',
  logoImage: '/logo.png',
  title: 'Producer',
  sections: {
    releases: {
      title: 'New releases',
      items: [{ title: 'Album', image: '/a.jpg', url: 'https://a.com' }],
    },
    promotion: { title: 'Empty section', items: [] },
    basicInfo: {
      items: [{ title: 'Website', image: '/w.jpg', url: 'https://w.com' }],
    },
  },
};

describe('LinksPageContent', () => {
  it('should render the header and every non-empty section', () => {
    render(<LinksPageContent content={content} />);

    expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
    expect(screen.getByText('Producer')).toBeInTheDocument();
    expect(screen.getByText('New releases')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Album' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Website' })).toBeInTheDocument();
  });

  it('should skip sections without items', () => {
    render(<LinksPageContent content={content} />);

    expect(screen.queryByText('Empty section')).not.toBeInTheDocument();
  });
});
