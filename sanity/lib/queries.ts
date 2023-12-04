import { groq } from 'next-sanity';
import client from './client';

export async function getCommitteeMembers() {
  const query = groq`*[_type == "CommitteeMembers"]
    {
        _id,
        name,
        designation,
        image{"image": asset->url}
    }
  `;
  const result = await client.fetch(query);
  return result;
}

