// import Image from "next/image";

import { Suspense } from "react";

import { SpinLoader } from "@/components/SpinLoader";
import PostLists from "@/components/PostsList";
import { Container } from "@/components/Container";
// import Teste from "@/components/Testes";

export default async function Home() {

  return (
    <Container>
        <header>
            <h1 className="text-6xl font-bold text-center py-8">
                aqui você verá informativos dinamicos, cada vez que acessa a pagina!
            </h1>


        </header>
        <h1>Euler Henrique Pinto Araudjo Valente</h1>
        <br/>
        <Suspense fallback={<SpinLoader/>}>
           <PostLists/>
        </Suspense>
         {/* <br/><br/>
         <Teste/> */}

        <footer className="text-6xl font-bold text-center py-8">
            <p>
                e aqui a marca, o logotipo e marca registrada...
            </p>
        </footer>
     </Container>
  );
}
