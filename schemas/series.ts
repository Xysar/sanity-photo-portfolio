export default {
  title: 'Series',
  name: 'series',
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
    {title: 'Thumbnail', name: 'thumbnail', type: 'image', options: {hotspot: true}},
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
    },
    {
      title: 'Camera used',
      name: 'camera',
      type: 'string',
    },
    {
      title: 'Credits',
      name: 'credits',
      type: 'array',
      of: [
        {
          title: 'role',
          name: 'role',
          type: 'object',
          fields: [
            {
              title: 'Role Name',
              name: 'name',
              type: 'string',
            },
            {title: 'people', name: 'people', type: 'array', of: [{type: 'string'}]},
          ],
        },
      ],
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
          {title: 'Projects', value: 'projects'},
          {title: 'Personal', value: 'personal'},
          {title: 'Folklorico', value: 'folklorico'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
