import pymongo
#import dnspython
import time
import json
from bson import json_util
from flask import jsonify

client = pymongo.MongoClient('mongodb+srv://Kevin:kevin7755@cluster0-djvxv.mongodb.net/test?retryWrites=true&w=majority')
db = client.blog
mongo_collection = db.articles

def postArt(art):
    try:
        mongo_collection.insert_one(art)
        return
    except:
        raise


def gettest():
    articles = []
    try:
        # strtime = time.strftime('%Y-%m-%d', time.localtime(time.time()))
        # mongo_collection.insert_one({"time": strtime, "title": "t1", "article": "post article test"})
        for x in mongo_collection.find().limit(10):
            articles.append(x)
        articles = json_util.dumps(articles)
        print(articles)
        return articles
    except:
        raise



