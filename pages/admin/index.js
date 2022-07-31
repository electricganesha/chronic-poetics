import dynamic from "next/dynamic"

const AdminFirebase = dynamic(
  () => import("../../components/AdminFirebase"),
  { ssr: false }
)

export default function Page() {
  return <AdminFirebase />
}
