export default {
  title: 'Collection',
  name: 'collection',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      titles: 'Series',
      name: 'series',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'series'}]}],
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
}
