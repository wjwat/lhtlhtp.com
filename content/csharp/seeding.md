+++
title = "Seeding Your Database"
weight = 10
updated = 2022-04-19
+++

During Week 6 of the *C# and .NET* course of *Epicodus* you will be introduced
to database seeding. The lesson itself mentions the reason for why you would
want to pre-seed your database in the second paragraph:

> In order for us to more quickly and efficiently test our API without having to
> manually add data in MySQLWorkbench or via POST requests, we will automate the
> process of seeding the database.

As you develop your APIs during this week having a database already populated
with some data can make it easier to quickly and efficiently test out the logic
you add on a step-by-step basis to make sure it's working as intended.

Depending on the size of your seed it can be a pain to keep it inside of your
database context file when you have to revisit it for any reason and end up
having to scroll around to make sense of what is going on.

Our example below only includes four rows for our database, but imagine a
scenario in which you have to seed your database with 10, 50, 100 pieces of
data! Creating a single JSON file as the source for that seed, and then using
tools that can 'speak' JSON, brings a lot of potential to what you can do with
your seed data.

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

**Old and busted**
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
    builder.Entity<Sandwich>().HasData(
      new Sandwich { SandwichId = 1, Name = "The Raph", Description: "Meatballs, extra spicy." },
      new Sandwich { SandwichId = 2, Name = "The Donny", Description: "Turkey & Brie w/ green apples" },
      new Sandwich { SandwichId = 3, Name = "The Leo", Description: "Ham, american, mustard." },
      new Sandwich { SandwichId = 4, Name = "The Mikey", Description: "Pineapple on a hot dog?" }
    );
  }
}
```

**New hotness**
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
```json
[
  {
    "SandwichId": 1,
    "Name": "The Raph",
    "Description": "Meatballs, extra spicy."
  },
  {
    "SandwichId": 2,
    "Name": "The Donny",
    "Description": "Turkey & Brie w/ green apples"
  },
  {
    "SandwichId": 3,
    "Name": "The Leo",
    "Description": "Ham, american, mustard."
  },
  {
    "SandwichId": 4,
    "Name": "The Mikey",
    "Description": "Pineapple on a hot dog?",
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