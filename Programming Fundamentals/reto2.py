listMenu = ["----Menu----","Cambiar contraseña", "Ingresar coordenadas actuales", "Ubicar zona wifi más cercana", "Guardar archivo con ubicación cercana",
            "Actualizar registros de zonas wifi desde archivo", "Elegir opción de menú favorita", "Cerrar sesión."]
user = 52208
password = 80225
captchaUser1 = 208
captchaUser2 = (15+1) * 0
guess1 = 0
guess2 = 8

userData = int(input("Introduzca el Usuario: "))

def menu(item):
    for i in range(0, len(item)):
        if i == 0:
            print(item[i]);
        else:
            print(str(i) + ". " + item[i])

def selectOption():
    return int(input("Elija una opción: "))

def validationOptions(optionInt: int, eCounter: int):
    if optionInt >= 1 and optionInt <= 7:
       eCounter = optionsSelected(optionInt, eCounter)
    else:
        eCounter += 1
        if eCounter >= 3:
            print("Error")
        else:
            menu(listMenu)
            userOption: int = selectOption()
            validationOptions(userOption, eCounter)
        exit

def optionsSelected(i: int, nErrors: int):
    if i == 6:
        optionFav: int = int(input("Seleccione opción favorita: "))
        if optionFav >= 1 and optionFav <= 5:
            guess1User = int(input(
                "Para confirmar por favor responda: Redondo soy y es cosa anunciada. Si estoy a la derecha algo valgo, pero a la izquierda soy nada. ¿Cuál número soy?: "))
            if guess1 == guess1User:
                guess2User = int(input(
                    "Para confirmar por favor responda: Parece un reloj de arena o eslabón de una cadena. ¿Qué número es?: "))
                if guess2 == guess2User:
                    listMenu.insert(1, listMenu[optionFav])
                    listMenu.pop(optionFav+1)
                    menu(listMenu)
                    userOption: int = selectOption()
                    print(f'Usted ha elegido la opción {userOption}')
                    exit
                else:
                    print("Error")
                    menu(listMenu)
                    userOption: int = selectOption()
                    validationOptions(userOption, nErrors)
            else:
                print("Error")
                menu(listMenu)
                userOption: int = selectOption()
                validationOptions(userOption, nErrors)
        else:
            print("Error")
            exit
    elif i == 7:
        print("Hasta pronto")
        exit
    else:
        print("Error")
        return nErrors


if user == userData:
    passwordData = int(input("Introduzca la contraseña: "))
    counter = 0
    if password == passwordData:
        captchaUserVerified = int(
            input(f'Introduzca la suma de {captchaUser1} y {captchaUser2}: '))
        if captchaUserVerified == captchaUser1 + captchaUser2:
            print("Sesión iniciada")
            menu(listMenu);
            userOption: int = selectOption()
            print(f'Usted ha elegido la opción {userOption}')
            counter = validationOptions(userOption, counter)
        else:
            print("Error")
    else:
        print("Error")
else:
    print("Error")