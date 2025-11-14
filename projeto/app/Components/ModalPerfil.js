export default function ModalPerfil() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-6 mb-16">

        {/* CABEÇALHO */}
        <div className="flex gap-6 pb-6 border-b dark:border-black">

          {/* FOTO */}
          <img
            src="https://imgs.search.brave.com/Vioi-zzDSzfYaT3bTj94ROth-P8-BWh17gctujc0NJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LXByZC5wb3J0YWxw/b3MuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L28tcXVlLWUtcGVy/ZmlsLXByb2Zpc3Np/b25hbC5qcGc"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full object-cover"
          />

          {/* INFOS BÁSICAS */}
          <div className="flex flex-col justify-center gap-1">
            <span className="text-xl font-semibold  dark:text-black">Nome</span>
            <span className="text-sm text-gray-700">Cargo</span>
            <span className="text-sm text-gray-700">Localização</span>
            <span className="text-sm text-gray-700">Área</span>
          </div>

          {/* IDIOMAS + INTERESSES */}
          <div className="flex flex-col justify-center gap-1 pl-6 border-l dark:border-black">
            <span className="text-sm font-semibold  dark:text-black">Idiomas</span>
            <span className="text-sm text-gray-700">{/* Idiomas */}</span>

            <span className="text-sm font-semibold mt-2  dark:text-black">Áreas de Interesse</span>
            <span className="text-sm text-gray-700">{/* Áreas */}</span>
          </div>
        </div>

        {/* RESUMO E FORMAÇÕES */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="rounded-lg shadow-md p-4 min-h-40 bg-white">
            <span className="font-semibold  dark:text-black">Resumo</span>
          </div>

          <div className="rounded-lg shadow-md p-4 min-h-40 bg-white">
            <span className="font-semibold  dark:text-black">Formações</span>
          </div>
        </div>

        {/* HABILIDADES */}
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="rounded-lg shadow-md p-4 bg-white">
            <span className="font-semibold  dark:text-black">Habilidades Técnicas</span>
          </div>

          <div className="rounded-lg shadow-md p-4 bg-white">
            <span className="font-semibold  dark:text-black">Soft Skills</span>
          </div>
        </div>

        {/* EXPERIÊNCIAS, PROJETOS, CERTIFICAÇÕES */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="rounded-lg shadow-md p-4 min-h-[200px] bg-white">
            <span className="font-semibold  dark:text-black">Experiências</span>
          </div>

          <div className="rounded-lg shadow-md p-4 min-h-[200px] bg-white">
            <span className="font-semibold  dark:text-black">Projetos</span>
          </div>

          <div className="rounded-lg shadow-md p-4 min-h-[200px] bg-white">
            <span className="font-semibold  dark:text-black">Certificações</span>
          </div>
        </div>

      </div>
    </>
  );
}
