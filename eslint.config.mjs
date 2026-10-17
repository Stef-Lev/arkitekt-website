import nextVitals from 'eslint-config-next/core-web-vitals';
import perfectionist from 'eslint-plugin-perfectionist';

const config = [
  ...nextVitals,
  {
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'unsorted',
          newlinesBetween: 0,
          customGroups: [
            { groupName: 'content', elementNamePattern: '^@/content/content$' },
            { groupName: 'props-type', elementNamePattern: '\\.types$' },
            { groupName: 'styles', elementNamePattern: '\\.module\\.css$' },
          ],
          groups: [
            'type-import',
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'content',
            'props-type',
            'styles',
            'unknown',
          ],
        },
      ],
    },
  },
];

export default config;
