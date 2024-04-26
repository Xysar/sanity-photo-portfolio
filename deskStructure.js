export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Page Info')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'homePage'].includes(listItem.getId())
      ),
    ])
