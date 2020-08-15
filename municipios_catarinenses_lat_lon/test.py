# -*- coding: utf-8 -*-

import pandas as pd

municipios_sc = pd.read_csv('municipios_sc_lat_lon.csv')
municipios_sc = municipios_sc.drop('codigo_ibge', 1)
municipios_sc = municipios_sc.drop('capital', 1)
municipios_sc = municipios_sc.drop('codigo_uf', 1)

municipios = []
casos = []

f = open("municipios.txt", "r")
lista_municipios = f.read().splitlines()
for municipio in lista_municipios:
    data = municipio.split(" - ")
    municipios.append(data[0])
    casos.append(int(data[1]))

lat = []
lon = []

municipio_df = municipios_sc.loc[municipios_sc['nome'] == 'Grão Pará']

print(municipio_df)