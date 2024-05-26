import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'book',
  title: 'Książka',
  type: 'document',
  fields: [
    defineField({
      name: 'bookTitle',
      title: 'Tytuł książki',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Cena',
      type: 'number',
    }),
  ],
})
