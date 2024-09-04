static int Square(int x)
{
    return x * x;
}

static int Successor(int x)
{
    return x + 1;
}

static Func<int, int> Compose1(Func<int, int> f, Func<int, int> g)
{
    return (int x) => f(g(x));
}

var squareSuccessor = Compose1(Square, Successor);
int result = squareSuccessor(12);
Console.WriteLine(result);