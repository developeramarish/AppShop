using System;
using System.Linq;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AppShop.Core.Interfaces;
using AppShop.Infrastructure.Extensions;
using AppShop.Core.Queries;

namespace AppShop.Infrastructure.Repositories
{
    public abstract class BaseRepository<T> : IBaseRepository<T> where T : class, IEntity
    {
        protected readonly AppShopDbContext dbContext;
        protected Dictionary<string, Expression<Func<T, object>>> OrderableColumns { get; private set; }

        public BaseRepository(AppShopDbContext dbContext)
        {
            this.dbContext = dbContext;
            OrderableColumns = new Dictionary<string, Expression<Func<T, object>>>();
        }

        public virtual async Task<QueryResult<T>> GetAll(IQuery queryObject)
        {
            var query = dbContext.Set<T>().AsQueryable();

            query = query.ApplyOrdering(queryObject, OrderableColumns);

            var totalItems = await query.CountAsync();

            query = query.ApplyPaging(queryObject);

            return new QueryResult<T>(){
                Items = await query.ToListAsync(),
                TotalItems = totalItems
            };
        }

        public virtual async Task<T> GetById(int id)
        {
            return await dbContext.Set<T>().SingleOrDefaultAsync(e => e.Id == id);
        }

        public virtual void Add(T entity)
        {
            dbContext.Set<T>().Add(entity);
        }

        public virtual void Remove(T entity)
        {
            dbContext.Set<T>().Remove(entity);
        }
    }
}