import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SocialMedia from './social-media';
import content from '@/content/content';

describe('SocialMedia', () => {
  it.each(['spotify', 'instagram', 'youtube'] as const)(
    'should link to %s in a new tab',
    (name) => {
      render(<SocialMedia />);

      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('href', content.drawer.socialUrls[name]);
      expect(link).toHaveAttribute('target', '_blank');
    },
  );
});
