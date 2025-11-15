"use client";
import { useEffect, useState } from "react";
import ModalPerfil from "./ModalPerfil";

export default function Card() {
  const [perfis, setPerfis] = useState([]);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        setCarregando(true);
        const resposta = await fetch("/data/perfis.json");
        
        if (!resposta.ok) {
          throw new Error(`Erro ${resposta.status}: Não foi possível carregar os perfis`);
        }
        
        const dados = await resposta.json();
        setPerfis(dados);
        setErro(null);
      } catch (erro) {
        console.error("Erro ao buscar perfis:", erro);
        setErro(erro.message);
      } finally {
        setCarregando(false);
      }
    }
    
    carregar();
  }, []);

  if (carregando) {
    return (
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center items-center p-6 sm:p-8 lg:p-10">
        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Carregando perfis...</span>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center items-center p-6 sm:p-8 lg:p-10">
        <span className="text-sm sm:text-base text-red-600 dark:text-red-400">Erro: {erro}</span>
      </div>
    );
  }

  if (perfis.length === 0) {
    return (
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center items-center p-6 sm:p-8 lg:p-10">
        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Nenhum perfil encontrado.</span>
      </div>
    );
  }

  return (
    <>
      {perfis.map((p) => (
        <div
          key={p.id}
          onClick={() => setPerfilSelecionado(p)}
          className="flex flex-col gap-2 sm:gap-3 h-auto p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl cursor-pointer"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={p.foto}
              alt={`Foto de ${p.nome}`}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-200 dark:ring-slate-600"
              onError={(e) => {
                e.target.src = "https://imgs.search.brave.com/Vioi-zzDSzfYaT3bTj94ROth-P8-BWh17gctujc0NJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LXByZC5wb3J0YWxw/b3MuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L28tcXVlLWUtcGVy/ZmlsLXByb2Zpc3Np/b25hbC5qcGc";
              }}
            />

            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white truncate">
                {p.nome}
              </span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">
                {p.cargo}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {p.localizacao}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {p.habilidadesTecnicas?.slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      {perfilSelecionado && (
        <ModalPerfil
          perfil={perfilSelecionado}
          onClose={() => setPerfilSelecionado(null)}
        />
      )}
    </>
  );
}