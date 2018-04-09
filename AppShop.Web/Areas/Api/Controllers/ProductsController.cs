using System.Threading;
using System.Threading.Tasks;
using AppShop.Core.Entities;
using AppShop.Core.Interfaces;
using AppShop.Core.Queries;
using AppShop.Web.Api.Resources;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AppShop.Web.Api.Controllers 
{
    public class ProductsController : BaseController 
    {
        private readonly IProductRepository _productRepository;

        public ProductsController(
            IProductRepository productRepository, 
            IMapper mapper,
            IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public async Task<QueryResultResource<ProductResource>> GetAll(QueryResource queryResource)
        {
            var queryObject = mapper.Map<QueryResource, Query>(queryResource);
            
            var queryResult = await _productRepository.GetAll(queryObject);

            return mapper.Map<QueryResult<Product>, QueryResultResource<ProductResource>>(queryResult);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var product = await _productRepository.GetById(id);
            if(product == null)
                return NotFound();

            var productResource = mapper.Map<Product, ProductResource>(product);

            return Ok(productResource);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ProductResource data)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var domain = mapper.Map<ProductResource, Product>(data);

            _productRepository.Add(domain);
            await unitOfWork.CompleteAsync();

            var productResource = mapper.Map<Product, ProductResource>(domain);

            return Ok(productResource);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ProductResource data)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var product = await _productRepository.GetById(id);
            if(product == null)
                return NotFound();

            mapper.Map<ProductResource, Product>(data, product);
            await unitOfWork.CompleteAsync();

            var productResource = mapper.Map<Product, ProductResource>(product);

            return Ok(productResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _productRepository.GetById(id);
            if(product == null)
                return NotFound();

            _productRepository.Remove(product); 
            await unitOfWork.CompleteAsync();

            return Ok(id);
        }
    }
}