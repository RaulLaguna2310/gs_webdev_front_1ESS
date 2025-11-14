"use client";

export default function ModalPerfil({ perfil, onClose }) {
  if (!perfil) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl bg-white rounded-xl shadow-xl p-6 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        {/* CABEÇALHO */}
        <div className="flex gap-6 pb-6 border-b border-gray-300">
          {/* FOTO */}
          <img
            src={perfil.foto}
            alt={`Foto de ${perfil.nome}`}
            className="w-32 h-32 rounded-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://imgs.search.brave.com/Vioi-zzDSzfYaT3bTj94ROth-P8-BWh17gctujc0NJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LXByZC5wb3J0YWxw/b3MuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L28tcXVlLWUtcGVy/ZmlsLXByb2Zpc3Np/b25hbC5qcGc";
            }}
          />

          {/* INFOS BÁSICAS */}
          <div className="flex flex-col justify-center gap-1">
            <span className="text-2xl font-semibold text-gray-900">
              {perfil.nome}
            </span>
            <span className="text-base text-gray-700">{perfil.cargo}</span>
            <span className="text-sm text-gray-600">{perfil.localizacao}</span>
            <span className="text-sm text-gray-600">{perfil.area}</span>
          </div>

          {/* IDIOMAS + INTERESSES */}
          <div className="flex flex-col justify-center gap-2 pl-6 border-l border-gray-300">
            <div>
              <span className="text-sm font-semibold text-gray-900 block mb-1">
                Idiomas
              </span>
              {perfil.idiomas?.map((idioma, idx) => (
                <span key={idx} className="text-sm text-gray-700 block">
                  {idioma.idioma} - {idioma.nivel}
                </span>
              ))}
            </div>

            <div>
              <span className="text-sm font-semibold text-gray-900 block mb-1">
                Áreas de Interesse
              </span>
              <div className="flex flex-wrap gap-1">
                {perfil.areaInteresses?.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RESUMO E FORMAÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-lg shadow-md p-4 min-h-40 bg-gray-50">
            <span className="font-semibold text-gray-900 block mb-2">
              Resumo
            </span>
            <p className="text-sm text-gray-700">{perfil.resumo}</p>
          </div>

          <div className="rounded-lg shadow-md p-4 min-h-40 bg-gray-50">
            <span className="font-semibold text-gray-900 block mb-3">
              Formações
            </span>
            {perfil.formacao?.map((form, idx) => (
              <div key={idx} className="mb-3">
                <p className="text-sm font-medium text-gray-900">
                  {form.curso}
                </p>
                <p className="text-xs text-gray-600">
                  {form.instituicao} - {form.ano}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HABILIDADES */}
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="rounded-lg shadow-md p-4 bg-gray-50">
            <span className="font-semibold text-gray-900 block mb-3">
              Habilidades Técnicas
            </span>
            <div className="flex flex-wrap gap-2">
              {perfil.habilidadesTecnicas?.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg shadow-md p-4 bg-gray-50">
            <span className="font-semibold text-gray-900 block mb-3">
              Soft Skills
            </span>
            <div className="flex flex-wrap gap-2">
              {perfil.softSkills?.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIÊNCIAS, PROJETOS, CERTIFICAÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="rounded-lg shadow-md p-4 min-h-[200px] bg-gray-50">
            <span className="font-semibold text-gray-900 block mb-3">
              Experiências
            </span>
            {perfil.experiencias?.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-sm font-medium text-gray-900">{exp.cargo}</p>
                <p className="text-xs text-gray-600">{exp.empresa}</p>
                <p className="text-xs text-gray-500">
                  {exp.inicio} - {exp.fim}
                </p>
                <p className="text-xs text-gray-700 mt-1">{exp.descricao}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg shadow-md p-4 min-h-[200px] bg-gray-50">
            <span className="font-semibold text-gray-900 block mb-3">
              Projetos
            </span>
            {perfil.projetos?.map((proj, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-sm font-medium text-gray-900">
                  {proj.titulo}
                </p>
                <p className="text-xs text-gray-700 mt-1">{proj.descricao}</p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Ver projeto →
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-lg shadow-md p-4 min-h-[200px] bg-gray-50">
            <span className="font-semibold text-gray-900 block mb-3">
              Certificações
            </span>
            <ul className="space-y-2">
              {perfil.certificacoes?.map((cert, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  • {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
