
import { MenuAdmin } from "@/components/Admin/MenuAdmin";
import { requireLoginSessionOrRedirect } from "@/lib/login/manage-login";
// import { ModalBlocking } from "@/components/BlockingModal";



export default async function RootAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   await requireLoginSessionOrRedirect()

  return (
    <>
      <MenuAdmin/>
      {children}
    </>
  );
}
