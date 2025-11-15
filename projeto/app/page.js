import BarraPesquisa from "./Components/BarraPesquisa";
import ListaCards from "./Components/ListaCards";
import ModalPerfil from "./Components/ModalPerfil";

export default function Home() {
  return (
    <>
      <BarraPesquisa/> 
      <div className="flex justify-center items-center h-auto w-auto mb-5">
        <ListaCards />
      </div>
      <ModalPerfil />
    </>
  );
}
