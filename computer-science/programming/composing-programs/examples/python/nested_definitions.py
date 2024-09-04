def improve(update, close, guess=1):
    while not close(guess):
        guess = update(guess)
    return guess


def golden_update(guess):
    return 1 / guess + 1


def square_close_to_successor(guess):
    return approx_eq(guess * guess, guess + 1)


def approx_eq(x, y, tolerance=1e-15):
    return abs((x - y) < tolerance)


def average(x, y):
    return (x + y) / 2


def sqrt_update(x, a):
    return average(x, a / x)


result = improve(golden_update, square_close_to_successor)

print(sqrt_update(16, 16))
