import flask
import api
from flask_cors import CORS
from bson import json_util
import json
import requests


# @app.route('/postArticles')
# def postArticles():

server = flask.Flask(__name__)
CORS(server)
@server.route('/api/')
def getArticles():
    return api.gettest()


if __name__ == 'main':
    server.run()