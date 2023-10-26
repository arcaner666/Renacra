void ChangeFirstName(IPerson person)
{
    person.FirstName = "Dilara     ";
    Console.WriteLine($"person         => FirstName: {person.FirstName}, LastName: {person.LastName}, Age: {person.Age}");
}

void ChangeFirstName2(IPerson person)
{
    person = new Employee("Sevdagül   ", "Şenol", 55);
    Console.WriteLine($"person         => FirstName: {person.FirstName}, LastName: {person.LastName}, Age: {person.Age}");
}

void ChangeFirstName3(ref IPerson person)
{
    person = new Employee("Sevdagül   ", "Şenol", 55);
    Console.WriteLine($"person         => FirstName: {person.FirstName}, LastName: {person.LastName}, Age: {person.Age}");
}

Employee employee = new Employee("Arcan Caner", "Şenol", 28);
IPerson customEmployee = employee;
Console.WriteLine($"employee       => FirstName: {employee.FirstName}, LastName: {employee.LastName}, Age: {employee.Age}");
Console.WriteLine($"customEmployee => FirstName: {customEmployee.FirstName}, LastName: {customEmployee.LastName}, Age: {customEmployee.Age}");
Console.WriteLine();
customEmployee.FirstName = "Yaşar Taner";
Console.WriteLine($"----- After the customEmployee.FirstName = \"Yaşar Taner\"; -------");
Console.WriteLine($"employee       => FirstName: {employee.FirstName}, LastName: {employee.LastName}, Age: {employee.Age}");
Console.WriteLine($"customEmployee => FirstName: {customEmployee.FirstName}, LastName: {customEmployee.LastName}, Age: {customEmployee.Age}");
Console.WriteLine();
Console.WriteLine($"----- In method ChangeFirstName(customEmployee); -------");
ChangeFirstName(customEmployee);
Console.WriteLine();
Console.WriteLine($"----- After the ChangeFirstName(customEmployee); -------");
Console.WriteLine($"employee       => FirstName: {employee.FirstName}, LastName: {employee.LastName}, Age: {employee.Age}");
Console.WriteLine($"customEmployee => FirstName: {customEmployee.FirstName}, LastName: {customEmployee.LastName}, Age: {customEmployee.Age}");
Console.WriteLine();
Console.WriteLine($"----- In method ChangeFirstName2(customEmployee); -------");
ChangeFirstName2(customEmployee);
Console.WriteLine();
Console.WriteLine($"----- After the ChangeFirstName2(customEmployee); -------");
Console.WriteLine($"employee       => FirstName: {employee.FirstName}, LastName: {employee.LastName}, Age: {employee.Age}");
Console.WriteLine($"customEmployee => FirstName: {customEmployee.FirstName}, LastName: {customEmployee.LastName}, Age: {customEmployee.Age}");
Console.WriteLine();
Console.WriteLine($"----- In method ChangeFirstName3(ref customEmployee); -------");
ChangeFirstName3(ref customEmployee);
Console.WriteLine();
Console.WriteLine($"----- After the ChangeFirstName3(ref customEmployee); -------");
Console.WriteLine($"employee       => FirstName: {employee.FirstName}, LastName: {employee.LastName}, Age: {employee.Age}");
Console.WriteLine($"customEmployee => FirstName: {customEmployee.FirstName}, LastName: {customEmployee.LastName}, Age: {customEmployee.Age}");
public interface IPerson
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
}

public class Employee : IPerson
{
    public Employee(string firstName, string lastName, int age)
    {
        LastName = lastName;
        FirstName = firstName;
        Age = age;
    }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
}