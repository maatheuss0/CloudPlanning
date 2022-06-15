using CloudPlanning_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Interfaces
{
    public interface IDiagramaRepository
    {
        /// <summary>
        /// Lista todos os Diagramas
        /// </summary>
        /// <returns>Uma lista de Diagramas</returns>
        List<Diagrama> Listar();

        /// <summary>
        /// Cadastra um novo Diagrama
        /// </summary>
        /// <param name="novaDiagrama">Objeto novaDiagrama que será cadastrado</param>
        void Cadastrar(Diagrama novaDiagrama);

        /// <summary>
        /// Atualiza um Diagrama existente
        /// </summary>
        /// <param name="id">ID da Diagrama que será atualizado</param>
        /// <param name="DiagramaAtualizado">Objeto com as novas informações</param>
        void Atualizar(int id, Diagrama DiagramaAtualizado);

        /// <summary>
        /// Deleta um Diagrama existente
        /// </summary>
        /// <param name="id">ID do Diagrama que será deletada</param>
        void Deletar(int id);

        /// <summary>
        /// Busca um Diagrama através do ID
        /// </summary>
        /// <param name="id">ID da Diagrama que será buscada</param>
        /// <returns>Uma Diagrama buscada</returns>
        Diagrama BuscarPorId(int id);
    }
}
