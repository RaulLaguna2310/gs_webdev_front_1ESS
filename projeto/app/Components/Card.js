"use client";
import { useEffect, useState } from "react";

export default function Card() {
  const [perfis, setPerfis] = useState([]);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

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
      <div className="col-span-3 flex justify-center items-center p-8">
        <span className="text-gray-600">Carregando perfis...</span>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="col-span-3 flex justify-center items-center p-8">
        <span className="text-red-600">Erro: {erro}</span>
      </div>
    );
  }

  if (perfis.length === 0) {
    return (
      <div className="col-span-3 flex justify-center items-center p-8">
        <span className="text-gray-600">Nenhum perfil encontrado.</span>
      </div>
    );
  }

  return (
    <>
      {perfis.map((p) => (
        <div
          key={p.id}
          className="flex flex-col gap-3 h-auto p-4 rounded-xl shadow-lg bg-white transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl"
        >
          <div className="flex items-center gap-3">
            <img
              src={p.foto}
              alt={`Foto de ${p.nome}`}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              onError={(e) => {
                e.target.src = "https://imgs.search.brave.com/Vioi-zzDSzfYaT3bTj94ROth-P8-BWh17gctujc0NJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LXByZC5wb3J0YWxw/b3MuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L28tcXVlLWUtcGVy/ZmlsLXByb2Zpc3Np/b25hbC5qcGc";
              }}
            />

            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-base font-semibold text-gray-900 truncate">
                {p.nome}
              </span>
              <span className="text-sm text-gray-600 truncate">
                {p.cargo}
              </span>
              <span className="text-xs text-gray-500 truncate">
                {p.localizacao}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {p.habilidadesTecnicas?.slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}