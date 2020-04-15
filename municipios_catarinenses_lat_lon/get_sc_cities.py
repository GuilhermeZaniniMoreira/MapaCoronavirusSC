import pandas as pd

municipios = pd.read_csv('municipios.csv')

# codigo_uf = 42

sc = municipios.loc[municipios['codigo_uf'] == 42]
print(sc)

sc.to_csv('sc.csv')