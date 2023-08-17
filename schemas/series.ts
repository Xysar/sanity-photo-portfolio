export default {
  title: 'Series',
  name: 'series',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      titles: 'Photos',
      name: 'photos',
      type: 'array',
      of: [{type: 'photo'}],
      validation: (Rule: any) => Rule.required().min(3),
    },

    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Commission', value: 'commission'},
          {title: 'Personal', value: 'personal'},
          {title: 'Folklorico', value: 'folklorico'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
    },
  ],
}
