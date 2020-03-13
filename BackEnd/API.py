import json
import os

from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api
from werkzeug.utils import secure_filename

from SQL import *

app = Flask(__name__)
api = Api(app)
CORS(app)


@app.route('/AddPrereq', methods=['POST', 'GET'])
def add_prereq():
    con = create_connection()
    try:
        course_code = request.args.get('Course') + "H3"
        try:
            prereq = request.args.get('Prereq')
        except:
            prereq = ""
        result = insert_course_prereq(con, course_code, prereq)
        end_connection(con)
        return str(result)
    except Exception as e:
        end_connection(con)
        return str(e)


@app.route('/AddOrNode', methods=['POST', 'GET'])
def add_or():
    con = create_connection()
    try:
        parent_course_code = request.args.get('ParentCourse')
        or_node_num = request.args.get('OrNum')
        course = request.args.get('Course') + "H3"
        result = insert_or_node(con, parent_course_code, or_node_num, course)
        end_connection(con)
        return str(result)
    except Exception as e:
        return str(e)


if __name__ == '__main__':
    app.run()
