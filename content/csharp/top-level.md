+++
title = "Top Level Statements"
weight = 2
updated = 2022-05-09
+++

TL;DR: You should use C# top-level statements to practice getting comfortable
with C#, and for white boarding.

The whole idea here is to help you build momentum as you learn. As you've moved
through Epicodus there have been moments where someone has recommended you use
a template for your projects, or you've maybe made one for yourself, and this is
to help cut back on all the unnecessary ceremony of getting a project up and
running so you can focus in on solving the problem itself. We've gone into more
detail about this in the section on whiteboarding, but anything you can do to
quickly and easily test & work on problems is something worth doing.

Instead of writing:
```cs
// helloworld.cs
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");
    }
  }
}
```

Write this instead:
```cs
// helloworld.cs
using System;

Console.WriteLine("Hello World!");
```

You still have to include a csproj file though:

```xml
<!-- helloworld.csproj -->
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net5.0</TargetFramework>
  </PropertyGroup>
</Project>
```

Either way you end up with this:

```sh
$ dotnet run
Hello World!
```

---

Here's an example of a whiteboard problem using top level statements, and using
full namespace, class, and main method.

**Problem**: Create a function that returns the count of true values that are in
an array.

**Example**: `countTrue(new bool[] {false, false, true, false}); // returns 1`

```cs
// using top level statements
int countTrue(bool[] arr)
{
  int count = 0;

  foreach(bool element in arr)
  {
    if (element)
    {
      count += 1;
    }
  }

  return count;
}

int result = countTrue(new bool[] {false, false, true, false}); // returns 1
System.Console.WriteLine(result);
```

```cs
// using namespace, class, and main method
namespace Whiteboard
{
  class Program
  {
    static void Main(string[] args)
    {
      int result = countTrue(new bool[] {false, false, true, false}); // returns 1
      System.Console.WriteLine(result);
    }

    static int countTrue(bool[] arr)
    {
      int count = 0;

      foreach(bool element in arr)
      {
        if (element)
        {
          count += 1;
        }
      }

      return count;
    }
  }
}
```

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net5.0</TargetFramework>
  </PropertyGroup>
</Project>
```

---

## dotnet-script

Another way you can run your C# code is using `dotnet-script`. `dotnet-script`
removes the need for setting up a `csproj` file altogether, and allows you to
write a simple `cs` file and then run it like so:

```sh
$ dotnet-script helloworld.cs
Hello World!
```

You can do things like including another file within the one you are working on
so you can break your out into smaller pieces:

```cs
// myProg.cs
#load "utils.cs"

using System;

Console.WriteLine(UtilFunction("abc"));
```

```sh
$ dotnet-script myProg.cs
a
b
c
```

You can also include NuGet packages in your file:

```cs
// color.cs
#r "nuget: Spectre.Console, 0.44.0"

using Spectre.Console;

AnsiConsole.MarkupLine("[bold red]Hello World![/]");
```

<pre data-lang="sh" style="background-color:#2b2c2f;color:#cccece;" class="language-sh "><code class="language-sh" data-lang="sh"><span style="color:#6699cc;">$ dotnet-script color.cs</span><span>
</span><span style="color:red;font-weight:bold;">Hello World!</span><span>
</span></code></pre>

As usual check the documentation for a fuller picture of what is possible using
`dotnet-script`.

---

## Links

* [C# Tutorial on top-level statements](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/top-level-statements)
* [C# 9 notes on top-level statements](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#top-level-statements)
* [C# programming guide on top-level statements](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/program-structure/top-level-statements)
* [filipw/dotnet-script GitHub repo](https://github.com/filipw/dotnet-script)
