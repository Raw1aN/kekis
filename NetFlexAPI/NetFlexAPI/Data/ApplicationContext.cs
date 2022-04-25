using Microsoft.EntityFrameworkCore;
using NetFlexAPI.Models;

namespace NetFlexAPI.Data;

public class ApplicationContext : DbContext
{
    public DbSet<User> Users { get; set; }
 
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("User ID=postgres; Server=localhost; port=5432; Database=NetFlexDb; Password=ALEXRED123321!@; Pooling=true;");
    }
}