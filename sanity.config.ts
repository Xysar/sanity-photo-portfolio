import {defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './schemas'
import {myStructure} from './deskStructure'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'jorge-portfolio',

  projectId: 'seu73xjg',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
