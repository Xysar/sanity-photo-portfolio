import {defineConfig} from 'sanity'

import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure} from './deskStructure'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'jorge-portfolio',

  projectId: 'seu73xjg',
  dataset: 'production',

  plugins: [
    visionTool(),
    structureTool({
      structure: myStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
