import PageHeader from "@/app/components/PageHeader";

export default function page() {
  return (
    <div>
       <PageHeader title={'my services'} add={'service'} path={'services/addService'} />
    </div>
  )
}