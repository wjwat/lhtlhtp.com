+++
title = "Seeding Your Database"
weight = 10
updated = 2022-04-19
+++

- Create your model
- Create your DB context which includes a table for that model
- When that table is being created call the function `SeedSandwichData`
  * This function opens a JSON file that is located *relative to the where your
    project is located.*
  * Strings with @ at the front indicate that the string is a verbatim string
    literal. Escape sequences are ignored.
- Takes the JSON Object properties and maps them to our C# fields.
  * How does it handle errors?
    EX: Expected string, but got number.
        String should only be `n` characters long, but is `n+1` in JSON.
- Why would you want to do this instead of defining the models in your
  dbContext?

```cs
// Models/Sandwich.cs
public class Sandwich
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Description { get; set; }
}

// Models/SandwichShopContext.cs
public class SandwichShopContext : DbContext
{
  public SandwichShopContext(
    DbContextOptions<SandwichShopContext> options
    ) : base(options)
  {
    // do nothing
  }

  public DbSet<Sandwich> Sandwiches { get; set; }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    builder.Entity<Sandwich>().HasData(SeedSandwichData());
  }

  private List<Sandwich> SeedSandwichData()
  {
    var sandwiches = new List<Sandwich>();

    using (StreamReader reader = new StreamReader(@"Sandwiches.json"))
    {
      string json = reader.ReadToEnd();
      sandwiches = JsonConvert.DeserializeObject<List<Sandwich>>(json);
    }

    return sandwiches;
  }
}
```

**Sandwiches.json**
```js
[
  {
    "SandwichId": 1,
    "Name": "The Raph",
    "Description": ""
  },
  {
    "SandwichId": 2,
    "Name": "The Donny",
    "Description": ""
  },
  {
    "SandwichId": 3,
    "Name": "The Leo",
    "Description": ""
  },
  {
    "SandwichId": 4,
    "Name": "The Mikey",
    "Description": "",
  }
]
```

## Notes to help finish this page

- [C#: `using` statement](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement)
- [Entity Core: OnModelCreating](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.dbcontext.onmodelcreating?view=efcore-6.0)
- [Entity Core: ModelBuilder](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.modelbuilder?view=efcore-6.0)
- [Entity Core: HasData](https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.metadata.builders.entitytypebuilder-1.hasdata?view=efcore-6.0)
- [C# In Depth](https://csharpindepth.com/Articles/Strings)
- [C# Escape Sequences](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/#string-escape-sequences)
- [Seeding a Database](https://www.learnhowtoprogram.com/c-and-net/building-an-api/seeding-a-database)