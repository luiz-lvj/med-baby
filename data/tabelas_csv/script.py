import csv
import json

json_file = open('tables.json', "r")

data = json.load(json_file)
json_file.close()
json_file = open('tables.json', "w")

tables = data["tables"]

table_name = "umero"

csv_file = open(table_name + ".csv")
csv_reader = csv.reader(csv_file, delimiter=',')

new_table = []
for row in csv_reader:
    if(row[0] == 'idade_gestacional'):
        continue
    table_row = {
        "idade_gestacional": row[0],
        "valor": row[1],
        "percentil": row[2]
    }
    new_table.append(table_row)
tables[str(table_name)] = new_table

new_data = {
    "tables": tables
}

json.dump(new_data,json_file, indent=4)

csv_file.close()
