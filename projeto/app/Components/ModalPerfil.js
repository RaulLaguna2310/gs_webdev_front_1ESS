"use client";

export default function ModalPerfil({ perfil, onClose }) {
  if (!perfil) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm sm:max-w-3xl lg:max-w-6xl bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 my-4 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl sm:text-2xl font-bold transition-colors"
          aria-label="Fechar modal"
        >
          ×
        </button>

        {/* CABEÇALHO */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pb-4 sm:pb-6 border-b border-gray-300 dark:border-slate-600">
          {/* FOTO */}
          <img
            src={perfil.foto}
            alt={`Foto de ${perfil.nome}`}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto sm:mx-0 ring-2 ring-gray-200 dark:ring-slate-600"
            onError={(e) => {
              e.target.src =
                "https://imgs.search.brave.com/Vioi-zzDSzfYaT3bTj94ROth-P8-BWh17gctujc0NJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LXByZC5wb3J0YWxw/b3MuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L28tcXVlLWUtcGVy/ZmlsLXByb2Zpc3Np/b25hbC5qcGc";
            }}
          />

          {/* INFOS BÁSICAS */}
          <div className="flex flex-col justify-center gap-1 text-center sm:text-left">
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
              {perfil.nome}
            </span>
            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{perfil.cargo}</span>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{perfil.localizacao}</span>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{perfil.area}</span>
          </div>

          {/* IDIOMAS + INTERESSES */}
          <div className="flex flex-col justify-center gap-2 sm:gap-3 pt-3 sm:pt-0 sm:pl-4 lg:pl-6 border-t sm:border-t-0 sm:border-l border-gray-300 dark:border-slate-600">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white block mb-1">
                Idiomas
              </span>
              {perfil.idiomas?.map((idioma, idx) => (
                <span key={idx} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 block">
                  {idioma.idioma} - {idioma.nivel}
                </span>
              ))}
            </div>

            <div>
              <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white block mb-1">
                Áreas de Interesse
              </span>
              <div className="flex flex-wrap gap-1">
                {perfil.areaInteresses?.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RESUMO E FORMAÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="rounded-lg shadow-md p-3 sm:p-4 min-h-32 sm:min-h-40 bg-gray-50 dark:bg-slate-700">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block mb-2">
              Resumo
            </span>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{perfil.resumo}</p>
          </div>

          <div className="rounded-lg shadow-md p-3 sm:p-4 min-h-32 sm:min-h-40 bg-gray-50 dark:bg-slate-700">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block mb-2 sm:mb-3">
              Formações
            </span>
            {perfil.formacao?.map((form, idx) => (
              <div key={idx} className="mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                  {form.curso}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {form.instituicao} - {form.ano}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HABILIDADES */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="rounded-lg shadow-md p-3 sm:p-4 bg-gray-50 dark:bg-slate-700">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block mb-2 sm:mb-3">
              Habilidades Técnicas
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {perfil.habilidadesTecnicas?.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg shadow-md p-3 sm:p-4 bg-gray-50 dark:bg-slate-700">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block mb-2 sm:mb-3">
              Soft Skills
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {perfil.softSkills?.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIÊNCIAS, PROJETOS, CERTIFICAÇÕES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="rounded-lg shadow-md p-3 sm:p-4 min-h-[180px] sm:min-h-[200px] bg-gray-50 dark:bg-slate-700">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block mb-2 sm:mb-3">
              Experiências
            </span>
            {perfil.experiencias?.map((exp, idx) => (
              <div key={idx} className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">{exp.cargo}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{exp.empresa}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {exp.inicio} - {exp.fim}
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{exp.descricao}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg shadow-md p-3 sm:p-4 min-h-[180px] sm:min-h-[200px] bg-gray-50 dark:bg-slate-700">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block mb-2 sm:mb-3">
              Projetos
            </span>
            {perfil.projetos?.map((proj, idx) => (
              <div key={idx} className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                  {proj.titulo}
                </p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">{proj.descricao}</p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-block mt-1"
                >
                  Ver projeto →
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-lg shadow-md p-3 sm:p-4 min-h-[180px] sm:min-h-[200px] bg-gray-50 dark:bg-slate-700">
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white block mb-2 sm:mb-3">
              Certificações
            </span>
            <ul className="space-y-1.5 sm:space-y-2">
              {perfil.certificacoes?.map((cert, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
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