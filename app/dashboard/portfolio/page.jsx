import PageHeader from "@/app/components/PageHeader";

export default function page() {
  return (
    <div>
       <PageHeader title={'my portfolio'} add={'project'} path={'portfolio/addProject'} />
    </div>
  )
}