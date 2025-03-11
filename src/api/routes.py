"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from api.models import db, Users, Products
import requests


api = Blueprint('api', _name_)
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {}
    response_body['message'] = "Hello! I'm a message that came from the backend"
    return response_body, 200


@api.route('/users', methods=['GET'])
def users():
    response_body = {}
    rows = db.session.execute(db.select(Users)).scalars()
    print(rows)
    # opción 1: standard
    # results = []
    # for row in rows:
    #    results.append(row.serialize())
    # opcion 2: list comprehension
    # variable = [ target for individual in iterable ]
    results = [ row.serialize() for row in rows]
    response_body['message'] = f'Listado de Usuarios'
    response_body['results'] = results
    return response_body, 200


@api.route('/products', methods=['GET', 'POST'])
def products():
    response_body = {}
    if request.method == 'GET':
        rows = db.session.execute(db.select(Products)).scalars()
        results = [row.serialize() for row in rows]
        response_body['results'] = results
        response_body['message'] = f'Respuesta para el método {request.method}'
        return response_body, 200
    if request.method == 'POST':
        data = request.json
        row = Products(name=data['name'],
                       description=data.get('description', 'n/a'),
                       price=data['price'])
        db.session.add(row)
        db.session.commit()
        response_body['message'] = f'Respuesta para el método {request.method}'
        response_body['results'] = row.serialize()
        return response_body, 200


@api.route('/products/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def product(id):
    response_body = {}
    row = db.session.execute(db.select(Products).where(Products.id == id)).scalar()
    print(row)
    if not row:
        response_body['message'] = f'El producto id {id} no existe'
        return response_body, 404
    # TODO:
    if request.method == 'GET':
        response_body['results'] = row.serialize()
        response_body['message'] = f'Respuesta para el método {request.method} del id: {id}' 
        return response_body, 200
    if request.method == 'PUT':
        data = request.json
        print('row', row.serialize())
        print('data', data)
        row.name = data.get('name')
        """
        foo = data.get('description', None)
        if foo:
            row.description = foo
        """
        row.description = data.get('description', row.description)
        row.price = data['price']
        db.session.commit()
        response_body['message'] = f'Respuesta para el método {request.method} del id {id}'
        response_body['results'] = row.serialize()
        return response_body, 200
    if request.method == 'DELETE':
        # La pregunta es: Borro o dashabilito ?
        db.session.delete(row)
        db.session.commit()
        response_body['message'] = f'Hemos borrado el procuto id {id}'
        response_body['results'] = {}
        return response_body, 200
    

@api.route('/planets', methods=['GET'])
def planets():
    response_body = {}
    url = 'https://swapi.tech/api/planets'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        print(data['results'])
        response_body['message'] = 'Listado de Planetas'
        response_body['results'] = data['results']
        return response_body, 200
    response_body['message'] = 'algo salió mal'
    return response_body, 400


@api.route('/planets/<int:planet_id>', methods=['GET'])
def planet(planet_id):
    response_body = {}
    url = f'https://swapi.tech/api/planets/{planet_id}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        print(data['result'])
        response_body['message'] = 'Detalles del Planeta'
        response_body['results'] = data['result']['properties']
        return response_body, 200
    response_body['message'] = 'algo salió mal'
    return response_body, 400


@api.route('/characters', methods=['GET'])
def characters():
    response_body = {}
    url = 'https://swapi.tech/api/people'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        print(data['results'])
        response_body['message'] = 'Listado de Personajes'
        response_body['results'] = data['results']
        return response_body, 200
    response_body['message'] = 'algo salió mal'
    return response_body, 400


@api.route('/characters/<int:character_id>', methods=['GET'])
def character(character_id):
    response_body = {}
    url = f'https://swapi.tech/api/people/{character_id}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        print(data['result'])
        response_body['message'] = 'Detalles del Personaje'
        response_body['results'] = data['result']['properties']
        return response_body, 200
    response_body['message'] = 'algo salió mal'
    return response_body, 400