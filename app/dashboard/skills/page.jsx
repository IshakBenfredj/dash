import PageHeader from "@/app/components/PageHeader";

export default function page() {
  return (
    <div>
       <PageHeader title={'my skills'} add={'skill'} path={'skills/addSkill'} />
    </div>
  )
}