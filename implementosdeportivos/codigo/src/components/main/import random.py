import random

# Lista de mujeres (incluye a tus hijas Isa y Laura)
mujeres = ['Isa', 'Valen', 'Ana', 'María', 'Laura']

# Solicitar al usuario que ingrese un nombre
nombre = input("Escribe un nombre para saber si será tu esposa: ")

# Verificar si el nombre está en la lista
if nombre in mujeres:
    # Generar una respuesta al azar sobre si será tu esposa
    sera_esposa = random.choice(['Sí', 'No'])
    
    # Si el nombre es 'Isa' o 'Laura', son tus hijas
    if nombre == 'Isa' or nombre == 'Laura':
        if sera_esposa == 'Sí':
            hijos = random.randint(0, 5)  # Puedes ajustar el rango según prefieras
            print(f"{nombre} es tu hija,  te va a casr  con ella y tendrás {hijos} hijos.")
        else:
            print(f"{nombre} es tu hija y no será tu esposa en este caso ficticio.")
    else:
        # Generar una cantidad aleatoria de hijos
        if sera_esposa == 'Sí':
            hijos = random.randint(0, 5)  # Puedes ajustar el rango según prefieras
            print(f"{nombre} será tu esposa y tendrás {hijos} hijos.")
        else:
            print(f"{nombre} no será tu esposa.")
else:
    print(f"{nombre} no está en la lista de mujeres que proporcionaste.")
