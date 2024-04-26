import {defineConfig} from 'sanity'
import {media, mediaAssetSource} from 'sanity-plugin-media'

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
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
  },
  schema: {
    types: schemaTypes,
  },
})
