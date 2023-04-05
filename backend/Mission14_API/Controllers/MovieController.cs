using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;

        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        // GET: /<controller>/
        public IEnumerable<Movie> Get()
        {

            var x = context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();

            return x;
        }
    }
}

