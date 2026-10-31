// Print1To10.cs
// Self-contained program that writes the numbers 1 through 10, one per line.

using System;

internal static class Program
{
    private static void Main()
    {
        for (int number = 1; number <= 10; number++)
        {
            Console.WriteLine(number);
        }
    }
}
