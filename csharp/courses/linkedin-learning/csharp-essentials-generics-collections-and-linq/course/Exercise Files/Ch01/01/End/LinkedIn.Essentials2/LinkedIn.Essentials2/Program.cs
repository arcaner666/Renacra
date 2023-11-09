// See https://aka.ms/new-console-template for more information
using Essentials2.Library;

var p1 = new Person
{
    FirstName = "matt",
    LastName = "milner",
    Age = 50
};

var p2 = new Person
{
    FirstName = "amanda",
    LastName = "owner",
    Age = 39
};

Swap<Person>(p1, p2);

Console.WriteLine($"Person 1: {p1.FirstName}");


int x = 5, y = 7;
Swap<int>(x, y);

Console.WriteLine($"X: {x} and Y: {y}");

static void Swap<T>(T first, T second)
{
    T temp = second;
    second = first;
    first = temp;
}