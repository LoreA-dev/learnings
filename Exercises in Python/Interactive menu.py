from typing import Coroutine
import numpy as np
import math


list_menu = ["----Menu----", "Cambiar contraseña", "Ingresar coordenadas actuales", "Ubicar zona wifi más cercana", "Guardar archivo con ubicación cercana",
            "Actualizar registros de zonas wifi desde archivo", "Elegir opción de menú favorita", "Cerrar sesión."]
user = 52208
password = 80225
captcha_user1 = 208
captcha_user2 = (15+1) * 0
guess1 = 0
guess2 = 8
coordinates = [-3.002, -4.227, -69.714, -70.365]
coordinates_array = []
actual_ubication = []
distance_coordinates = 0
coordinates_long_delta = [0,999999] #[pos, value]
wifi_zone = [[-3.777, -70.302,91],[-4.134,-69.983,233],[-4.006 ,-70.132,149],[3.846,-70.222,211]] #latitude, length, user numbers
afoot_time = 0
bike_time =  0


user_data = int(input("Introduzca el Usuario: "))


def menu(item):
    for i in range(0, len(item)):
        if i == 0:
            print(item[i]);
        else:
            print(str(i) + ". " + item[i])

def select_option():
    return int(input("Elija una opción: "))

def validation_options(option_int: int, e_counter: int):
    if option_int >= 1 and option_int <= 7:
       e_counter = option_selected(option_int, e_counter)
    else:
        e_counter += 1
        if e_counter >= 3:
            print("Error")
        else:
            menu(list_menu)
            user_option: int = select_option()
            validation_options(user_option, e_counter)
        exit()

def select_option_coordinates():
    return int(input('Presione 1,2 ó 3 para actualizar la respectiva coordenada.\nPresione 0 para regresar al menú: '))

def sort_array(array, index):
    latitude1 = math.radians(index[0])
    length1 = math.radians(index[1])
    r = 6372.795477598

    for i in range(len(array)):
        latitude2 = math.radians(array[i][0])
        length2 = math.radians(array[0][1])

        delta_length = length2 - length1
        distance = (math.acos(math.sin(latitude1) * math.sin(latitude2) + math.cos(latitude1) * math.cos(latitude2) * math.cos(delta_length))) * r
        distance *= 1000
        distance = round(distance,3)
        array[i].append(distance)

    for i in range(len(array) - 1):
        for j in range(i+1,len(array)):
            if array [i][3] > array[j][3]:
                temporal_distance = array[i]
                array [i] = array [j]
                array [j] = temporal_distance
    return array[:2]

def sort_users(number):
    for i in range(len(number) - 1):
        for j in range( i + 1 , len(number)):
            if number [i] [2] > number [j] [2]:
                prom_users = number [i]
                number [i] = number [j]
                number [j] = prom_users
    return(number)

def option_selected(i: int, nErrors: int):
    if i == 1:
        global password
        validate_password = int(input("Ingrese contraseña actual: "))
        if validate_password == password:
            confirm_password = int(input("Confirme contraseña actual: "))
            if confirm_password == password:
                new_password: int = int(input("Ingrese contraseña nueva: "))
                if new_password != password:
                    password = new_password
                    menu(list_menu);
                    user_option: int = select_option()
                    print(f'Usted ha elegido la opción {user_option}')
                    validation_options(user_option, nErrors)
                else:
                    print("Error")
                    exit()
            else:
                print("Error")
                exit()
        else:
            print("Error")
            exit()
    elif i == 2:
        if len(coordinates_array) == 0:
            option_coordinates = 1;
            while(option_coordinates != 0):
                latitude = round(float(input('Ingrese coordenadas - Latitud: ')),3)
                if ((latitude < coordinates[0]) and (latitude > coordinates[1])):
                    length = round(float(input('Ingrese coordenadas - Longitud: ')),3)
                    if ((length < coordinates[2]) and (length > coordinates[3])):
                        coordinates_array.append([latitude, length])
                        delta = coordinates[3] - length
                        if(coordinates_long_delta[1] > delta):
                            coordinates_long_delta[0] = len(coordinates_array) - 1
                            coordinates_long_delta[1] = delta
                        if len(coordinates_array) == 3:
                            option_coordinates = 0
                            print(coordinates_array)
                            menu(list_menu);
                            user_option: int = select_option()
                            print(f'Usted ha elegido la opción {user_option}')
                            validation_options(user_option, nErrors)
                    else:
                        print("Error coordenada")
                        option_coordinates = 0
                        exit()
                else:
                    print("Error coordenada")
                    option_coordinates = 0
                    exit()
        else:
            print(f'Tus cordenadas son: {coordinates_array}')
            closest_to_west = coordinates_long_delta[0];
            print(f'Coordenada que está más al oriente: {coordinates_array[closest_to_west]}')
            coordinate_prom = sum(sum(coordinates_array,[]))/len(coordinates_array)
            print(f'Coordenada promedio de todos los puntos: {coordinate_prom}')
            coordinate_option:int = select_option_coordinates()
            if coordinate_option >= 0 and coordinate_option <= 3:
                if coordinate_option == 1:
                    new_coordinate_latitude1 = round(float(input('Ingrese coordenadas nueva - Latitud: ')),3)
                    if ((new_coordinate_latitude1 < coordinates[0]) and (new_coordinate_latitude1 > coordinates[1])):
                        new_coordinate_length1 = round(float(input('Ingrese coordenadas nueva - Longitud: ')),3)
                        if ((new_coordinate_length1 < coordinates[2]) and (new_coordinate_length1 > coordinates[3])):
                            coordinates_array[0] = [new_coordinate_latitude1, new_coordinate_length1]
                            print(coordinates_array) 
                            menu(list_menu);
                            user_option: int = select_option()
                            print(f'Usted ha elegido la opción {user_option}')
                            validation_options(user_option, nErrors)
                        else:
                            print("Error coordenada")
                            exit()
                    else:
                        print("Error coordenada")
                        exit()      
                elif coordinate_option == 2:
                    new_coordinate_latitude2 = round(float(input('Ingrese coordenadas nueva - Latitud: ')),3)
                    if ((new_coordinate_latitude2 < coordinates[0]) and (new_coordinate_latitude2 > coordinates[1])):
                        new_coordinate_length2 = round(float(input('Ingrese coordenadas nueva - Longitud: ')),3)
                        if ((new_coordinate_length2 < coordinates[2]) and (new_coordinate_length2 > coordinates[3])):
                            coordinates_array[1] = [new_coordinate_latitude2, new_coordinate_length2]
                            print(coordinates_array) 
                            menu(list_menu);
                            user_option: int = select_option()
                            print(f'Usted ha elegido la opción {user_option}')
                            validation_options(user_option, nErrors)
                        else:
                            print("Error coordenada")
                            exit()
                    else:
                        print("Error coordenada")
                        exit() 
                elif coordinate_option == 3:
                    new_coordinate_latitude3 = round(float(input('Ingrese coordenadas nueva - Latitud: ')),3)
                    if ((new_coordinate_latitude3 < coordinates[0]) and (new_coordinate_latitude3 > coordinates[1])):
                        new_coordinate_length3 = round(float(input('Ingrese coordenadas nueva - Longitud: ')),3)
                        if ((new_coordinate_length3 < coordinates[2]) and (new_coordinate_length3 > coordinates[3])):
                            coordinates_array[2] = [new_coordinate_latitude3, new_coordinate_length3]
                            print(coordinates_array) 
                            menu(list_menu);
                            user_option: int = select_option()
                            print(f'Usted ha elegido la opción {user_option}')
                            validation_options(user_option, nErrors)
                        else:
                            print("Error coordenada")
                            exit()
                    else:
                        print("Error coordenada")
                        exit()
                else:
                    print("Hasta pronto")
                    exit()
            else:
                print('Error actualización')
    elif i == 3:
        if len(coordinates_array) == 0:
            print('Error sin registro de coordenadas')
            exit()
        else:
            print(f'Coordenada [latitud, longitud] 1: {coordinates_array[0]}\nCoordenada [latitud, longitud] 2: {coordinates_array[1]}\nCoordenada [latitud, longitud] 3: {coordinates_array[2]}')
            option_ubication = int(input("Por favor elija su ubicación actual (1,2 ó 3) para calcular la distancia a los puntos de conexión: "))
            if option_ubication >= 1 and option_ubication <= 3:
                global distance_coordinates
                distance_coordinates = sort_array(wifi_zone,coordinates_array[option_ubication-1])
                global actual_ubication
                actual_ubication = coordinates_array[option_ubication-1]
                distance_coordinates = sort_users(distance_coordinates)
                for i in range(len(distance_coordinates)):
                    print(f'La zona wifi {i + 1} ubicada en {distance_coordinates[i][:2]} a {distance_coordinates[i][3]} metros, tiene en promedio {distance_coordinates[i][2]} usuarios')
                indications = int(input("Elija 1 o 2 para recibir indicaciones de llegada: "))
                if indications == 1 or indications == 2:
                    if coordinates_array[option_ubication -1 ][1] < distance_coordinates[indications - 1][1]:
                        print(f'Para llegar a la zona wifi dirigase primero al oriente.')
                    elif coordinates_array[option_ubication -1 ][1] > distance_coordinates[indications - 1][1]:
                        print(f'Para llegar a la zona wifi dirigase al occidente.')
                    elif coordinates_array[option_ubication -1 ][0] < distance_coordinates[indications - 1][0]:
                        print(f'Para llegar a la zona wifi dirigase al norte.')
                    else:
                        print(f'Para llegar a la zona wifi dirigase al sur.')
                    
                    afoot_time = distance_coordinates[indications - 1][3]/0.483
                    bike_time =  distance_coordinates[indications - 1][3]/3.33
                    total_afoot_time = round(afoot_time / 60, 2)
                    total_bike_time = round(bike_time / 60, 2)

                    print(f'Tiempo estimado a pie {total_afoot_time} minutos')
                    print(f'Tiempo estimado en bicicleta {total_bike_time} minutos') 
    
                    return_menu = int(input('Presione 0 para regresar al menu de opciopnes: '))
                    if return_menu == 0:
                        menu(list_menu);
                        user_option: int = select_option()
                        print(f'Usted ha elegido la opción {user_option}')
                        validation_options(user_option, nErrors)
                    else:
                        print("Error")
                        exit()
                else:
                    print("Error zona wifi")
                    exit()
            else:
                print("Error ubicación")
                exit()
    elif i == 4:
        if len(coordinates_array) == 0:
            print('Error de alistamiento')
            exit()
        else:
            information = {'actual': actual_ubication,'zonawifi1':[distance_coordinates[0][0:3]],'recorrido': [distance_coordinates[0][0:3], 'bicicleta']}
            print(information)
            confirmation_option = int(input('¿Está de acuerdo con la información a exportar? Presione 1 para confirmar, 0 para regresar al menú principal'))
            if confirmation_option == 1:
                print('Exportando archivo')
            else:
                menu(list_menu)
                user_option: int=select_option()
                validation_options(user_option, nErrors)
    elif i == 5:
        information = {'actual': actual_ubication,'zonawifi1':[distance_coordinates[0][0:3]],'recorrido': [distance_coordinates[0][0:3], 'bicicleta']}
        file = open(r'C:\Users\Lorena\Documents\learnings\new_information.txt','w')
        print(file.write(str(information)))
        return_menu = int(print('Datos de coordenadas para zonas wifi actualizados, presione 0 para regresar al menú principal'))
        menu(list_menu)
        user_option: int = select_option()
        validation_options(user_option, nErrors)
    elif i == 6:
        option_fav: int=int(input("Seleccione opción favorita: "))
        while option_fav >= 1 and option_fav <= 5:
            guess1_user=int(input(
                "Para confirmar por favor responda: Redondo soy y es cosa anunciada. Si estoy a la derecha algo valgo, pero a la izquierda soy nada. ¿Cuál número soy?: "))
            if guess1 == guess1_user:
                guess2_user=int(input(
                    "Para confirmar por favor responda: Parece un reloj de arena o eslabón de una cadena. ¿Qué número es?: "))
                if guess2 == guess2_user:
                    list_menu.insert(1, list_menu[option_fav])
                    list_menu.pop(option_fav+1)
                    menu(list_menu)
                    user_option: int=select_option()
                    print(f'Usted ha elegido la opción {user_option}')
                    exit()
                else:
                    print("Error")
                    menu(list_menu)
                    user_option: int=select_option()
                    validation_options(user_option, nErrors)
            else:
                print("Error")
                menu(list_menu)
                user_option: int=select_option()
                validation_options(user_option, nErrors)
        else:
            print("Error")
            exit()
    elif i == 7:
        print("Hasta pronto")
        exit()
    else:
        print("Error")
        return nErrors


if user == user_data:
    password_data=int(input("Introduzca la contraseña: "))
    counter=0
    if password == password_data:
        captcha_user_verified=int(
            input(f'Introduzca la suma de {captcha_user1} y {captcha_user2}: '))
        if captcha_user_verified == captcha_user1 + captcha_user2:
            print("Sesión iniciada")
            menu(list_menu);
            user_option: int=select_option()
            print(f'Usted ha elegido la opción {user_option}')
            counter=validation_options(user_option, counter)
        else:
            print("Error")
    else:
        print("Error")
else:
    print("Error")
