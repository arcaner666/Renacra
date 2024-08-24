def fib(n):
    """Compute the nth Fibonacci number, for n >= 2."""
    pred, curr = 0, 1
    k = 2
    while k < n: 
        pred, curr = curr, pred + curr
        k = k + 1
    return curr

result = fib(8)
assert fib(8) == 13, "The fibonacci number should be 13"
