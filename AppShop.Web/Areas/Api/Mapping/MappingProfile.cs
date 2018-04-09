using AppShop.Core.Entities;
using AppShop.Core.Queries;
using AppShop.Web.Api.Resources;
using AutoMapper;

namespace AppShop.Web.Api.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to Resource
            CreateMap<Product, ProductResource>();
            CreateMap<Photo, PhotoResource>();
            CreateMap<Query, QueryResource>();
            CreateMap(typeof(QueryResult<>), typeof(QueryResultResource<>));

            // Resource to Domain
            CreateMap<ProductResource, Product>().ForMember(p => p.Id, opt => opt.Ignore());
            CreateMap<PhotoResource, Photo>().ForMember(p => p.Id, opt => opt.Ignore());
        }
    }
}