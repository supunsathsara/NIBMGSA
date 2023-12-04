import { defineType } from 'sanity';


export default defineType({
  name: 'CommitteeMembers',
  title: 'Committee Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the committee member',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
  ],
});
