# -*- coding: utf-8 -*-
import pandas as pd
from pymongo import MongoClient

from dotenv import load_dotenv
load_dotenv(verbose=True)

import os

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

for idx, municipio in enumerate(municipios):
    municipio_df = municipios_sc.loc[municipios_sc['nome'] == municipio]
    lat.append(municipio_df['latitude'].values[0])
    lon.append(municipio_df['longitude'].values[0])
    
df = pd.DataFrame(list(zip(municipios, casos, lat, lon)), 
               columns =['nome', 'casos', 'latitude', 'longitude'])

# Connect to MongoDB
client = MongoClient("{}".format(os.getenv("MONGO_URL")))
db = client['cities']
collection = db['cities']
collection.delete_many({})
df.reset_index(inplace=True)
data_dict = df.to_dict("records")
# Insert collection
collection.insert_many(data_dict)
