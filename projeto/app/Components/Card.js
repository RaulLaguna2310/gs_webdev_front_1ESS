export default function Card() {
  return (
    <>
      <div
        className="flex justify-start items-center gap-4 h-auto w-6xl p-4 mb-4 rounded-xl shadow-lg bg-white transition-transform duration-500 ease-out hover:scale-102"
      >
        <img
          src="https://imgs.search.brave.com/Vioi-zzDSzfYaT3bTj94ROth-P8-BWh17gctujc0NJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LXByZC5wb3J0YWxw/b3MuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA4/L28tcXVlLWUtcGVy/ZmlsLXByb2Zpc3Np/b25hbC5qcGc"
          alt="Foto de perfil"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="text-lg font-semibold">Nome</span>
          <span className="text-sm text-gray-600">Cargo</span>
        </div>

        <div className="ml-auto">{/* GRID SKILLS */}</div>
      </div>
    </>
  );
}
