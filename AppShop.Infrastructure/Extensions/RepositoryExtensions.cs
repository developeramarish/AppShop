using System;
using System.Linq;
using System.Linq.Expressions;
using System.Collections.Generic;
using AppShop.Core.Interfaces;

namespace AppShop.Infrastructure.Extensions
{
    public static class RepositoryExtensions
    {
        public static IQueryable<T> ApplyOrdering<T>(this IQueryable<T> query, IQuery queryObject, Dictionary<string, Expression<Func<T, object>>> columns)
        {
            if (String.IsNullOrWhiteSpace(queryObject.SortBy) || !columns.ContainsKey(queryObject.SortBy))
                return query;

            if (queryObject.IsSortAscending)
                return query.OrderBy(columns[queryObject.SortBy]);
            else
                return query.OrderByDescending(columns[queryObject.SortBy]);
        }

        public static IQueryable<T> ApplyPaging<T>(this IQueryable<T> query, IQuery queryObject)
        {
            if (queryObject.Page <= 0)
                queryObject.Page = 1; 
            
            if (queryObject.Limit <= 0)
                queryObject.Limit = 10; 

            return query.Skip((queryObject.Page - 1) * queryObject.Limit).Take(queryObject.Limit);
        }
    }
}