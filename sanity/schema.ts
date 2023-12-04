import { type SchemaTypeDefinition } from 'sanity'
import CommitteeMembers from './schemas/CommitteeMembers'
import events from './schemas/events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [CommitteeMembers,events],
}
