from flask import Flask, request,json
import flask
from flask_cors import CORS

from api import gettest, postArt

app = Flask(__name__)
CORS(app, resources=r'/*')


headers = {
    'Cache-Control' : 'no-cache, no-store, must-revalidate',
    'Pragma' : 'no-cache' ,
    'Expires': '0' ,
    'Access-Control-Allow-Origin' : 'http://localhost:3000',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
}

@app.route('/api/gettest',methods=["GET"])
def getArticles():
    return flask.Response(gettest())

@app.route('/api/posttest',methods=["POST"])
def postArticles():
     title = request.json.get("title")
     article = request.json.get("article")
     time = request.json.get("time")
     prop = {'time': time, 'title': title, 'article': article}
     postArt(prop)
     return "ok"


if __name__ == 'main':
    app.run()