# print("Hello World");

string ="Hola";
numbre = 26
# print(type(string));
# print(type(number));

#Operations with numbers
sum= 3+2;
subtraction = 4-7;
negative = -7;
multiplication = 2*6;
exponent = 2**6;
division = 3.5/2;
intDivision = 3.5//2;
module = 7%2;


# print(sum);
# print(subtraction);
# print(negative);
# print(multiplication);
# print(exponent);
# print(division);
# print(intDivision);
# print(module);


#Concat strings
word1 = 'Hello, ';
word2 = "How are you?";


# print(word1 + word2);


#Booleans
# print (5==3);
# print(5!=3);
# print(5<3);
# print(5>3);
# print(5<=5);
# print(5>=3);



#Taking data by user
# age = input("How old are you?");
# print(age);

# user = input('Write your username');
# password = input("Write your password");

# print("Your user is : " + user + "\n" + "Your passwrod is: " + password);



#Some methodologies
# greetings = "Hello, ";
# print(greetings);
# name = "Ruby Aguilar";
# print(greetings + " "+ name);
# print(greetings, name, sep='-');
# print(greetings, name, end= "!\n" + "How are you?" + "\n");


#Firts word in capital letter
text = "hello, HOW are You?";
# print(text.capitalize());


#UpperCase
textUpper = "I'm very good. And you?";

# print(textUpper.upper());



#LowerCase
textLower = "NICE to heard THAT!.";
# print(textLower.lower());



#SwapCase
textChanged = "ThIS teXT is inVerTed";
# print(textChanged.swapcase());


#Activities in class
# greetings="Wello world! ";
# print(greetings, '\n');
# print('\t',greetings.upper(),'\n');
# print(greetings.swapcase(),'\n');
# print('\t','\t',greetings.lower());


#Conditionals
#Know if is an even number 
# number = int(input("Write the number: "));
# if number%2==0:
#     print(number, ' is an even number .');
# else:
#     print( number, " in't an even number .");


#Tasa de descuento CORREGIR
# paidValue = int(input("Put the total value: "));

# if paidValue > 100:
#     discount = int(input("Put the discount value: "));
#     discountValue= (paidValue * discount) / 100;
#     valueToPay = paidValue - discountValue;
#     print("The value with discount is: " , valueToPay);
# else:
#     print("The total value has to be more than 100");
    

#Return money
# paidValue = int(input("Put the paid value: "));
# billet = 10000

# if paidValue < billet:
#     returnValue = billet - paidValue;
#     print("the return will be: ",returnValue);
# elif paidValue == billet:
#     print("The return will be 0");
# else:
#     print("The paid value has to be less than the billet.");


#Greet according to the time
# hourNow = int(input("Write the hour: "));

# if hourNow >=0 and hourNow <= 12:
#     print("Good morning");
# elif hourNow >=13 and hourNow <= 18:
#     print("Good afternoon");
# elif hourNow >=19 and hourNow <=24:
#     print("Good nigth");
# else: 
#     print("Invalid time");


#Operador ternario

# greetings = 'morning' if True else 'nigth';
# print(f'Good {greetings}');

# example1 = 2 if 1>3 else 4;
# print(example1);

# example2 = ('morning', 'nigth') [7>2];
# print(example2)


# #Corto circuito
# value = 'works';

# if print(f'This {value}'):
#     pass

# if True and print(f'This {value}'):
#     pass

# if True and 5>7:
#     pass

# if True and print('Wokrs'):
#     pass

# if False or print("This in't true."):
#     pass


#if anidados
# dayOfWeek = input("Put day of week: ").lower();

# if dayOfWeek == "lunes":
#     print("Today is Monday")
# elif dayOfWeek == "martes":
#     print("Today is Tuesday");
# elif dayOfWeek == "miercoles":
#     print("Today is Wednesday");
# elif dayOfWeek == "jueves":
#     print("Today is Thursday");
# elif dayOfWeek == "viernes":
#     print("Today is Friday");
# elif dayOfWeek == "sabado":
#     print("Today is Saturday");
# elif dayOfWeek == "domingo":
#     print("Today is Sunday");
# else:
#     print("Don't know what day is")
    

#Switch

# def options():
#     print('---------Options--------');
#     print('1. Sum');
#     print('2. Substraction');
#     print('3. Multiplication');
#     print('4. Division');

# def default():
#     return 'Invalid option';

# def switch(case, firstValue,secondValue):
#     calculator= {
#         1: (firstValue + secondValue),
#         2: (firstValue - secondValue),
#         3: (firstValue * secondValue),
#         4: (firstValue / secondValue),
#     }
#     return calculator.get(case, default());

# firstValue = int(input('Write first number value: '));
# secondValue = int(input('Write second number value: '));
# options();
# optionSelector = int(input("Select one option: "));
# result = switch(optionSelector, firstValue,secondValue);
# print(result);


#Salidas de consola

# print("    |\__/,|   (`\ ")
# print("   .|o o  |_   ) ) ")
# print("-(((---(((--------")


# print('                   _ |\_  ')
# print('                   \` ..\ ')
# print('              __,.-" =_Y= ')
# print('            ."        )   ')
# print('      _    /   ,    \/\_  ')
# print('     ((____|    )_-\ \_-` ')
# print("      `-----'`-----` `--` ")


#Ciclos
# n= 5
# while n>0:
#     print(n);
#     n=n-1
# print('Despegue!');

# # year = 2001
# # while year <= 2012:
# #     print("Informas del año: ", str(year));
# #     year += 1

# num = None;
# while num != 0:
#     num = int(input('Introduce numero: '));


#Ciclos FOR
# words= "Lorena";
# friends = ["Maria", "Diana", "Andrea"]
# for i in words:
#     print(i)

# for i in friends:
#     print("Holaaa!", i)


#Calculadora con ciclos
# grade1 = int(input("Write the firt grade: "))
# grade2 = int(input("Write the second grade: "))
# grade3 = int(input("Write the third grade: "))
# grade4 = int(input("Write the fourth grade: "))
# grade5 = int(input("Write the fifth grade: "))

# listMenu = ["----Menu----","Saludar", "Es par", "Promedio", "Modulo",
#             "Porcentaje", "Potencia", "Salir"]

# hourNow = None
# while hourNow != 0:
#     hourNow = int(input("Write the hour: "))
#     if hourNow >0 and hourNow <= 12:
#         print("Good morning");
#     elif hourNow >=13 and hourNow <= 18:
#         print("Good afternoon");
#     elif hourNow >=19 and hourNow <=24:
#         print("Good nigth");
#     else:
#         print("Invalid time");
# print("Invalid time");
    

#List
# list()
# print(list("Python"))

numberList = [1,2,3,4,5]
numberList[1] = "Hola"
print(numberList)