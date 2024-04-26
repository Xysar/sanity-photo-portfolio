export default {
  title: 'Homepage',
  name: 'homePage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Homepage Images',
      name: 'images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],

      validation: (Rule: any) => Rule.required().length(4),
    },
  ],
}
