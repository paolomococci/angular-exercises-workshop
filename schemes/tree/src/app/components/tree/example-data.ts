export const files = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'app',
        type: 'folder',
        children: [
          {
            name: 'components',
            type: 'folder',
            children: [
              { name: 'example-data.ts', type: 'file' },
              { name: 'tree.component.html', type: 'file' },
              { name: 'tree.component.sass', type: 'file' },
              { name: 'tree.component.ts', type: 'file' }
            ]
          },
          { name: 'app-routing.module.ts', type: 'file' },
          { name: 'app.component.html', type: 'file' },
          { name: 'app.component.sass', type: 'file' },
          { name: 'app.component.ts', type: 'file' },
          { name: 'app.module.ts', type: 'file' }
        ]
      },
      {
        name: 'assets',
        type: 'folder'
      }
    ]
  },
  { name: 'README.md', type: 'file' },
  { name: 'package.json', type: 'file' }
];
