using CloudPlanning_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Interfaces
{
    public interface IComponenteRepository
    {
        /// <summary>
        /// Lista todos os componentes
        /// </summary>
        /// <returns>Uma lista de componentes</returns>
        List<Componente> Listar();

        /// <summary>
        /// Cadastra uma novo componente
        /// </summary>
        /// <param name="novoComponente">Objeto novoComponente que será cadastrado</param>
        void Cadastrar(Componente novoComponente);

        /// <summary>
        /// Atualiza um existente
        /// </summary>
        /// <param name="id">ID de componentes que será atualizado</param>
        /// <param name="componenteAtualizado">Objeto com as novas informações</param>
        void Atualizar(int id, Componente componenteAtualizado);

        /// <summary>
        /// Deleta um componente existente
        /// </summary>
        /// <param name="id">ID do componente que será deletado</param>
        void Deletar(int id);

        /// <summary>
        /// Busca um componente através do ID
        /// </summary>
        /// <param name="id">ID do componente que será buscada</param>
        /// <returns>Um componente buscado</returns>
        Componente BuscarPorId(int id);
    }
}
