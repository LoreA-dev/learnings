welcome = 'Bienvenido al sistema de ubicación para zonas públicas WIFI';
print(welcome);

user = 52208;
password = 80225;
userData = int(input("Introduzca el Usuario: "));
captchaUser1 = 208;
captchaUser2 = (15+1) * 0;


if user == userData:
    passwordData = int(input("Introduzca la contraseña: "));
    if password == passwordData:
        captchaUserVerified = int(input(f'Introduzca la suma de {captchaUser1} y {captchaUser2}: '));
        if captchaUserVerified == captchaUser1 + captchaUser2:
            print("Sesión iniciada")
        else:
            print("Error");
    else:
        print("Error");
else:
    print("Error");
    