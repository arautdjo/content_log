
import { MenuAdmin } from "@/components/Admin/MenuAdmin";
// import { ModalBlocking } from "@/components/BlockingModal";



export default function RootAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <MenuAdmin/>
      {children}
    </>
  );
}
