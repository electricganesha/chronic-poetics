import dynamic from "next/dynamic";

const AdminFirebase = dynamic(() => import("../../components/AdminFirebase"), {
  ssr: false,
});

export default function AdminPage() {
  if (!AdminFirebase) {
    return null;
  }

  return <AdminFirebase />;
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
