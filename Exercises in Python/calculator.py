list_menu = ["---Menu---","Sum","Subtract", "Multiplication", "Division", "Exponent"]

def menu_order(item):
    for i in range(0, len(item)):
        if i == 0:
            print(item[i]);
        else:
            print(str(i) + ". " + item[i])

def numbers_input():
    num1 = int(input("Please enter the first number: "))
    num2 = int(input("Please enter the second number: "))
    return num1, num2

print("Welcome to the calculator")
menu_order(list_menu)
option_selected = int(input("Please select one option: "))

if option_selected == 1:
    print(f'You selected {list_menu[1]}')
    array = numbers_input()
    print("Result: " + str(array[0] + array[1]))
elif option_selected == 2:
    print(f'You selected {list_menu[2]}')
    array = numbers_input()
    print("Result: " + str(array[0] + array[1]))
elif option_selected == 3:
    print(f'You selected {list_menu[3]}')
    array = numbers_input()
    print("Result: " + str(array[0] + array[1]))
elif option_selected == 4:
    print(f'You selected {list_menu[4]}')
    array = numbers_input()
    print("Result: " + str(array[0] + array[1]))
elif option_selected == 5:
    print(f'You selected {list_menu[5]}')
    array = numbers_input()
    print("Result: " + str(array[0] + array[1]))
else:
    print("Invalid option selected")

