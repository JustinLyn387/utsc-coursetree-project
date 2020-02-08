import DataRetrieval
import json
from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)


class prereqsTree(Resource):
    def get(self, course):
        return json.loads(DataRetrieval.prereqTree(course))


class courseDirectory(Resource):
    def get(self):
        return json.loads(DataRetrieval.courseDirectory())


class courseInfo(Resource):
    def get(self, course):
        return json.loads(DataRetrieval.courseInfo(course))


class getCourses(Resource):
    def get(self):
        return json.loads(DataRetrieval.getAllCourses())


class getCoursesWIDs(Resource):
    def get(self):
        return json.loads(DataRetrieval.getCoursesWIDs())


api.add_resource(prereqsTree, '/DataRetrieval/<course>')
api.add_resource(courseDirectory, '/DataRetrieval/directory')
api.add_resource(courseInfo, '/DataRetrieval/courseInfo/<course>')
api.add_resource(getCourses, '/DataRetrieval/courses')
api.add_resource(getCoursesWIDs, '/DataRetrieval/coursesWids')

if __name__ == '__main__':
    app.run()
