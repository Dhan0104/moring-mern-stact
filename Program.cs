
// // using System;
// // class Program
// // {
// //    public static void Main()
// //     {
// //         Console.WriteLine("Hello, World!");
// //     }
// // }
// using System;

// class FactorialCalculator
// {
//     static void Main()
//     {
//         Console.Write("Enter a non-negative integer: ");
//         int number = Convert.ToInt32(Console.ReadLine());

//         if (number < 0)
//         {
//             Console.WriteLine("Factorial is not defined for negative numbers.");
//         }
//         else
//         {
//             long factorial = 1;

//             for (int i = 1; i <= number; i++)
//             {
//                 factorial *= i;
//             }

//             Console.WriteLine($"Factorial of {number} is: {factorial}");
//         }
//     }
// }
//1. write a C# program that checks if a number is greater than 10 with its output

// using System;

// class Program
// {
//     static void Main()
//     {
//         Console.Write("Enter a number: ");
//         int number = Convert.ToInt32(Console.ReadLine());

//         if (number > 10)
//         {
//             Console.WriteLine("The number is greater than 10.");
//         }
//         else
//         {
//             Console.WriteLine("The number is not greater than 10.");
//         }
//     }
// } 
//2. write a C# program that checks if a number is even or odd with its output
// using System;

// class Program
// {
//     static void Main()
//     {
//         Console.Write("Enter a number: ");
//         int number = Convert.ToInt32(Console.ReadLine());

//         if (number % 2 == 0)
//         {
//             Console.WriteLine("The number is even.");
//         }
//         else
//         {
//             Console.WriteLine("The number is odd.");
//         }
//     }
// } 
//3. write a C# program that checks if a number is positive, negative or zero with its output
// using System;

// class Program
// {
//     static void Main()
//     {
//         Console.Write("Enter a number: ");
//         double number = Convert.ToDouble(Console.ReadLine());

//         if (number > 0)
//         {
//             Console.WriteLine("The number is positive.");
//         }
//         else if (number < 0)
//         {
//             Console.WriteLine("The number is negative.");
//         }
//         else
//         {
//             Console.WriteLine("The number is zero.");
//         }
//     }
// } 
//write a c# program to determine if a person is eligible to (age>=18)
// using System;

// class Program
// {
//     static void Main()
//     {
//         Console.Write("Enter your age: ");
//         int age = Convert.ToInt32(Console.ReadLine());

//         if (age >= 18)
//         {
//             Console.WriteLine("You are eligible.");
//         }
//         else
//         {
//             Console.WriteLine("You are not eligible.");
//         }
//     }
// }
//5.write a program that checks wheather a number is divisible by both 3 and 5
// using System;

// class Program
// {
//     static void Main()
//     {
//         Console.Write("Enter a number: ");
//         int number = Convert.ToInt32(Console.ReadLine());

//         if (number % 3 == 0 && number % 5 == 0)
//         {
//             Console.WriteLine("The number is divisible by both 3 and 5.");
//         }
//         else
//         {
//             Console.WriteLine("The number is not divisible by both 3 and 5.");
//         }
//     }
// }  
//6.write a program that checks wheather a given number is leap year or not
// using System;

// class Program
// {
//     static void Main()
//     {
//         Console.Write("Enter a year: ");
//         int year = Convert.ToInt32(Console.ReadLine());

//         if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
//         {
//             Console.WriteLine($"{year} is a leap year.");
//         }
//         else
//         {
//             Console.WriteLine($"{year} is not a leap year.");
//         }
//     }
// }
//Write a C# program that transposes a given 3x3 matrix.
// using System;

// class MatrixColumnSum
// {
//     static void Main()
//     {
//         int[,] matrix = new int[3, 3];
//         int i, j;

//         // Input the matrix
//         Console.WriteLine("Enter the elements of the 3x3 matrix:");

//         for (i = 0; i < 3; i++)
//         {
//             for (j = 0; j < 3; j++)
//             {
//                 Console.Write($"Element [{i + 1},{j + 1}]: ");
//                 matrix[i, j] = Convert.ToInt32(Console.ReadLine());
//             }
//         }

//         // Print the matrix
//         Console.WriteLine("\nThe entered matrix is:");
//         for (i = 0; i < 3; i++)
//         {
//             for (j = 0; j < 3; j++)
//             {
//                 Console.Write(matrix[i, j] + "\t");
//             }
//             Console.WriteLine();
//         }

//         // Calculate and print column sums
//         Console.WriteLine("\nSum of each column:");
//         for (j = 0; j < 3; j++)
//         {
//             int columnSum = 0;
//             for (i = 0; i < 3; i++)
//             {
//                 columnSum += matrix[i, j];
//             }
//             Console.WriteLine($"Sum of column {j + 1}: {columnSum}");
//         }
//     }
// }
//Write a C# program that initializes a jagged array with different row lengths and prints its elements.
// using System;

// class JaggedArrayExample
// {
//     static void Main()
//     {
//         // Declare and initialize the jagged array
//         int[][] jaggedArray = new int[3][]; // 3 rows

//         // Initializing rows with different lengths
//         jaggedArray[0] = new int[] { 1, 2 };           // Row 1 has 2 elements
//         jaggedArray[1] = new int[] { 3, 4, 5 };        // Row 2 has 3 elements
//         jaggedArray[2] = new int[] { 6 };              // Row 3 has 1 element

//         // Displaying the jagged array
//         Console.WriteLine("Elements of the jagged array:");
//         for (int i = 0; i < jaggedArray.Length; i++)
//         {
//             Console.Write("Row " + (i + 1) + ": ");
//             for (int j = 0; j < jaggedArray[i].Length; j++)
//             {
//                 Console.Write(jaggedArray[i][j] + " ");
//             }
//             Console.WriteLine();
//         }
//     }
// }
//Write a C# program that finds and prints the maximum value in each row of a jagged array.
// using System;

// class MaxInJaggedArray
// {
//     static void Main()
//     {
//         Console.Write("Enter the number of rows for the jagged array: ");
//         int rows = Convert.ToInt32(Console.ReadLine());

//         int[][] jaggedArray = new int[rows][];

//         // Input lengths and values for each row
//         for (int i = 0; i < rows; i++)
//         {
//             Console.Write($"Enter the number of elements for row {i + 1}: ");
//             int cols = Convert.ToInt32(Console.ReadLine());

//             jaggedArray[i] = new int[cols];

//             for (int j = 0; j < cols; j++)
//             {
//                 Console.Write($"Enter element [{i + 1},{j + 1}]: ");
//                 jaggedArray[i][j] = Convert.ToInt32(Console.ReadLine());
//             }
//         }

//         // Find and display max value in each row
//         Console.WriteLine("\nMaximum value in each row:");
//         for (int i = 0; i < jaggedArray.Length; i++)
//         {
//             int max = jaggedArray[i][0]; // Assume first is max
//             for (int j = 1; j < jaggedArray[i].Length; j++)
//             {
//                 if (jaggedArray[i][j] > max)
//                 {
//                     max = jaggedArray[i][j];
//                 }
//             }
//             Console.WriteLine($"Max in row {i + 1}: {max}");
//         }
//     }
// }
//Write a C# program that takes a string as input and prints its reverse.
// using System;

// class ReverseString
// {
//     static void Main()
//     {
//         Console.Write("Enter a string: ");
//         string input = Console.ReadLine();

//         string reversed = "";

//         // Reverse the string manually using a loop
//         for (int i = input.Length - 1; i >= 0; i--)
//         {
//             reversed += input[i];
//         }

//         Console.WriteLine("Reversed string: " + reversed);
//     }
// }
//Write a C# program that counts and prints the number of vowels in a given string.
// using System;

// class VowelCounter
// {
//     static void Main()
//     {
//         Console.Write("Enter a string: ");
//         string input = Console.ReadLine();

//         int vowelCount = 0;

//         // Convert to lowercase to simplify comparisons
//         string lowerInput = input.ToLower();

//         for (int i = 0; i < lowerInput.Length; i++)
//         {
//             char ch = lowerInput[i];
//             if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//             {
//                 vowelCount++;
//             }
//         }

//         Console.WriteLine("Number of vowels: " + vowelCount);
//     }
// }
//Write a C# program that checks if a given string is a palindrome.
// using System;

// class PalindromeChecker
// {
//     static void Main()
//     {
//         Console.Write("Enter a string: ");
//         string input = Console.ReadLine();

//         // Normalize the input: remove spaces and convert to lowercase
//         string cleanedInput = input.Replace(" ", "").ToLower();

//         // Reverse the string
//         string reversed = "";
//         for (int i = cleanedInput.Length - 1; i >= 0; i--)
//         {
//             reversed += cleanedInput[i];
//         }

//         // Check if the original cleaned input is equal to the reversed
//         if (cleanedInput == reversed)
//         {
//             Console.WriteLine("The string is a palindrome.");
//         }
//         else
//         {
//             Console.WriteLine("The string is not a palindrome.");
//         }
//     }
// } 
//Write a C# program that searches for a specific name in an array of names and prints if it exists.
// using System;

// class NameSearchUserInput
// {
//     static void Main()
//     {
//         Console.Write("Enter the number of names: ");
//         int n = Convert.ToInt32(Console.ReadLine());

//         string[] names = new string[n];

//         // Input names from the user
//         for (int i = 0; i < n; i++)
//         {
//             Console.Write($"Enter name {i + 1}: ");
//             names[i] = Console.ReadLine();
//         }

//         Console.Write("Enter the name to search: ");
//         string searchName = Console.ReadLine();

//         bool found = false;

//         // Search for the name
//         for (int i = 0; i < n; i++)
//         {
//             if (names[i].Equals(searchName, StringComparison.OrdinalIgnoreCase))
//             {
//                 found = true;
//                 break;
//             }
//         }

//         // Print result
//         if (found)
//         {
//             Console.WriteLine($"'{searchName}' was found in the list.");
//         }
//         else
//         {
//             Console.WriteLine($"'{searchName}' was not found in the list.");
//         }
//     }
// }
//Write a C# program that sorts an array of integers in ascending order.
// using System;

// class SortArray
// {
//     static void Main()
//     {
//         Console.Write("Enter the number of elements: ");
//         int n = Convert.ToInt32(Console.ReadLine());

//         int[] numbers = new int[n];

//         // Input array elements
//         for (int i = 0; i < n; i++)
//         {
//             Console.Write($"Enter element {i + 1}: ");
//             numbers[i] = Convert.ToInt32(Console.ReadLine());
//         }

//         // Sort the array using Bubble Sort
//         for (int i = 0; i < n - 1; i++)
//         {
//             for (int j = 0; j < n - i - 1; j++)
//             {
//                 if (numbers[j] > numbers[j + 1])
//                 {
//                     // Swap
//                     int temp = numbers[j];
//                     numbers[j] = numbers[j + 1];
//                     numbers[j + 1] = temp;
//                 }
//             }
//         }

//         // Print the sorted array
//         Console.WriteLine("\nSorted array in ascending order:");
//         for (int i = 0; i < n; i++)
//         {
//             Console.Write(numbers[i] + " ");
//         }
//     }
// }
//Write a C# program that takes two numbers and an operator (+, -, \*, /) as input and performs the corresponding operation.
// using System;

// class SimpleCalculator
// {
//     static void Main()
//     {
//         Console.Write("Enter first number: ");
//         double num1 = Convert.ToDouble(Console.ReadLine());

//         Console.Write("Enter second number: ");
//         double num2 = Convert.ToDouble(Console.ReadLine());

//         Console.Write("Enter operator (+, -, *, /): ");
//         char op = Convert.ToChar(Console.ReadLine());

//         double result = 0;
//         bool valid = true;

//         switch (op)
//         {
//             case '+':
//                 result = num1 + num2;
//                 break;

//             case '-':
//                 result = num1 - num2;
//                 break;

//             case '*':
//                 result = num1 * num2;
//                 break;

//             case '/':
//                 if (num2 != 0)
//                     result = num1 / num2;
//                 else
//                 {
//                     Console.WriteLine("Error: Division by zero is not allowed.");
//                     valid = false;
//                 }
//                 break;

//             default:
//                 Console.WriteLine("Invalid operator.");
//                 valid = false;
//                 break;
//         }

//         if (valid)
//         {
//             Console.WriteLine($"Result: {num1} {op} {num2} = {result}");
//         }
//     }
// }
//Write a C# program that counts and prints the number of words in a given sentence.
// using System;

// class WordCounter
// {
//     static void Main()
//     {
//         Console.Write("Enter a sentence: ");
//         string sentence = Console.ReadLine();

//         // Trim to remove leading/trailing spaces and split by spaces
//         string[] words = sentence.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

//         int wordCount = words.Length;

//         Console.WriteLine("Number of words: " + wordCount);
//     }
// }
//Write a C# program that calculates and prints the factorial of a given number.
// using System;

// class FactorialCalculator
// {
//     static void Main()
//     {
//         Console.Write("Enter a non-negative integer: ");
//         int number = Convert.ToInt32(Console.ReadLine());

//         if (number < 0)
//         {
//             Console.WriteLine("Factorial is not defined for negative numbers.");
//         }
//         else
//         {
//             long factorial = 1;

//             for (int i = 1; i <= number; i++)
//             {
//                 factorial *= i;
//             }

//             Console.WriteLine($"Factorial of {number} is: {factorial}");
//         }
//     }
// }
// using System;
// namespace defaultConstructor
// {
//   class Car
//   {
//     public string brand;
//     public string model;
//     public int year;

//     // Default constructor
//     public Car()
//     {
//       brand = "Toyota";
//       model = "Corolla";
//       year = 2020;
//     }
//   }
//   class Program
//   {
//     static void Main(string[] args)
//     {
//       // Create an object of Car class
//       Car myCar = new Car();

//       // Display the default values
//       Console.WriteLine("Brand: " + myCar.brand);
//       Console.WriteLine("Model: " + myCar.model);
//       Console.WriteLine("Year: " + myCar.year);
//     }
//   }
// }
// using System;

// class Person
// {
//   // Fields or properties
//   public string Name;
//   public int Age;

//   // Method (action)
//   public void Introduce()
//   {
//     Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
//   }
// }

// class Program
// {
//   static void Main()
//   {
//     // Creating object from class
//     Person person1 = new Person();
//     person1.Name = "Alice";
//     person1.Age = 25;

//     // Calling method
//     person1.Introduce();
//   }
// }
// using System;

// class Car
// {
//   public Car()  // Constructor
//   {
//     Console.WriteLine("A new car has been created!");
//   }
// }

// class Program
// {
//   static void Main()
//   {
//     Car myCar = new Car();  // Constructor runs here
//   }
// }
// using System;
// class Car
// {
//   public string color;
//   public Car(string carColor)  // Parameterized constructor
//   {
//     color = carColor;
//     Console.WriteLine("car color is :" + color);
//   }
// }
// class Program
// {
//   static void Main()
//   {
//     Car car1 = new Car("Red");  // Creating an object with a specific color
//     Car car2 = new Car("Blue"); // Creating another object with a different color
//   }
// }

// using System;
// class Person
// {
//   public string Name;
//   public int Age;
//   public Person()
//   {
//     Name = "arjun";
//     Age = 20;
//   }
//   public Person(string name, int age)
//   {
//     Name = name;
//     Age = age;
//   }
//   public void Info()
//   {
//     Console.WriteLine($"Name: {Name}, Age: {Age}");
//   }
// }
// class Program
// {
//   static void Main()
//   {
//     // Using default constructor
//     Person person1 = new Person();
//     person1.Info();

//     // Using parameterized constructor
//     Person person2 = new Person("Raj", 25);
//     person2.Info();
//   }
// }









