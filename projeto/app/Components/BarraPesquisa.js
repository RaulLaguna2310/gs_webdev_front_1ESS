'use client'
import { Search } from "lucide-react";
import { useState } from "react";
import dados from '../../public/data/perfis.json'
import ModalPerfil from './ModalPerfil'

export default function BarraPesquisa() {
    const [busca, setBusca] = useState('')
    const [resultados, setResultados] = useState([])
    const [perfilSelecionado, setPerfilSelecionado] = useState(null)

    const handleChange = (ev) => {
        const valor = ev.target.value
        setBusca(valor)
        
        if (!valor.trim()) {
            setResultados([])
            return
        }

        const resultadosFiltrados = dados.filter(item => 
            item.nome?.toLowerCase().includes(valor.toLowerCase()) ||
            item.cargo?.toLowerCase().includes(valor.toLowerCase()) ||
            item.localizacao?.toLowerCase().includes(valor.toLowerCase()) ||
            item.area?.toLowerCase().includes(valor.toLowerCase()) ||
            item.habilidadesTecnicas?.some(skill => 
                skill.toLowerCase().includes(valor.toLowerCase())
            )
        )

        setResultados(resultadosFiltrados)
    }

    const Pesquisa = () => {
        if (!busca.trim()) {
            setResultados([])
            return
        }

        const resultadosFiltrados = dados.filter(item => 
            item.nome?.toLowerCase().includes(busca.toLowerCase()) ||
            item.cargo?.toLowerCase().includes(busca.toLowerCase()) ||
            item.localizacao?.toLowerCase().includes(busca.toLowerCase()) ||
            item.area?.toLowerCase().includes(busca.toLowerCase()) ||
            item.habilidadesTecnicas?.some(skill => 
                skill.toLowerCase().includes(busca.toLowerCase())
            )
        )

        setResultados(resultadosFiltrados)
    }

    return (
        <>
            <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 dark:text-slate-300" />
                        <input
                            type="text"
                            value={busca}
                            onChange={handleChange}
                            onKeyDown={(ev) => ev.key === 'Enter' && Pesquisa()}
                            placeholder="Pesquisar..."
                            className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 text-sm sm:text-base border rounded-md bg-white text-black dark:bg-slate-800 dark:text-white dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-500 transition"
                        />
                    </div>

                    <button 
                        onClick={Pesquisa} 
                        className="w-full sm:w-auto px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-slate-800 text-white rounded-md hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500 transition-colors duration-200 font-medium"
                    >
                        Enviar
                    </button>
                </div>

                {busca && resultados.length === 0 && (
                    <div className="mt-8 text-center text-slate-500 dark:text-slate-400">
                        Nenhum resultado encontrado para "{busca}"
                    </div>
                )}
            </div>
            
            {resultados.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto mt-4">
                    {resultados.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => setPerfilSelecionado(p)}
                            className="flex flex-col gap-2 sm:gap-3 h-auto p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg bg-white dark:bg-slate-800 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl cursor-pointer"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <img
                                    src={p.foto}
                                    alt={`Foto de ${p.nome}`}
                                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover ring-2 ring-gray-200 dark:ring-slate-600"
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
                </div>
            )}

            {perfilSelecionado && (
                <ModalPerfil
                    perfil={perfilSelecionado}
                    onClose={() => setPerfilSelecionado(null)}
                />
            )}
        </>
    );
}