import { getCommitteeMembers } from "../../sanity/lib/queries"

export default async function CommitteeMembers() {
    const members = await getCommitteeMembers;
    console.log(members)
  return (
    <div>CommitteeMembers</div>
  )
}