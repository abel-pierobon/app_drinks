import json

# Cargar el archivo JSON original
with open('allBebidas2.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Nueva estructura
new_data = []

for drink in data['drinks']:
    new_drink = {
        "id": drink.get("idDrink", ""),
        "nombre": drink.get("strDrink", ""),
        "categoria": drink.get("strCategory", ""),
        "alcoholica": "Alcohólica" if drink.get("strAlcoholic", "") == "Alcoholic" else "No alcohólica",
        "vaso": drink.get("strGlass", ""),
        "instrucciones": drink.get("strInstructionsES", ""),
        "instruccionesIngles": drink.get("strInstructions", ""),
        "imagen": drink.get("strDrinkThumb", ""),
        "ingredientes": []
    }

    # Agregar los ingredientes
    for i in range(1, 16):
        ingrediente = drink.get(f"strIngredient{i}")
        if ingrediente:
            new_drink["ingredientes"].append(ingrediente)

    new_data.append(new_drink)

# Guardar el nuevo archivo JSON
with open('allBebidas2_modificado.json', 'w', encoding='utf-8') as file:
    json.dump(new_data, file, ensure_ascii=False, indent=4)

print("Archivo JSON modificado guardado como 'allBebidas_modificado.json'")
