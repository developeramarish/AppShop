using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AppShop.Core.Entities;
using AppShop.Core.Interfaces;
using AppShop.Web.Api.Resources;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace AppShop.Web.Api.Controllers 
{
    [AllowAnonymous]
    public class AuthController : BaseController
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public AuthController(
            IUserRepository userRepository, 
            IConfiguration configuration,
            IMapper mapper,
            IUnitOfWork unitOfWork) : base(mapper, unitOfWork)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] CredentialsResource credentials) 
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userRepository.FindByNameAndPasswordAsync(credentials.UserName, credentials.Password);

            if(user == null || await _userRepository.IsAdministrator(user) == false)
                return BadRequest("Invalid username or password.");
                
            return Ok(GenerateJwtToken(user));
        }

        private object GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("id", user.Id.ToString()),
                new Claim("email", user.Email),
                new Claim("username", user.UserName),
                new Claim("firstName", user.FirstName),
                new Claim("lastName", user.LastName),
                new Claim("isAdministrator", true.ToString()),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Issuer"],
                claims: claims,
                expires: DateTime.Now.AddDays(Convert.ToDouble(_configuration["Jwt:ExpireDays"])),
                signingCredentials: signingCredentials
            );

            return new { token = new JwtSecurityTokenHandler().WriteToken(token) };
        }
    }
}