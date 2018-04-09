using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AppShop.Core.Queries;

namespace AppShop.Core.Interfaces
{
    public interface IBaseRepository<T> where T : IEntity
    {
        Task<QueryResult<T>> GetAll(IQuery query);        
        Task<T> GetById(int id);
        void Add(T entity);
        void Remove(T entity);
    }
}