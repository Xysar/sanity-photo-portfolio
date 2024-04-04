export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Page Header',
      description: "Your name would probably Go Here, it's largest text at top of screen",
      type: 'string',
    },
    {title: 'Profile Picture', name: 'profilePicture', type: 'image', options: {hotspot: true}},
    {
      name: 'description',
      title: 'Site Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
