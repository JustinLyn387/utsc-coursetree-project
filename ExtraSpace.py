from SQL import *
import json

"""
def test(string):
    # Check to see if there are any courses that no longer exist
    counter = string.count("/(")
    # Run a loop to start splicing/removing
    while counter > 0:
        oldIndex = string.index("/(")
        newPrereq = string[:oldIndex] + string[oldIndex + 12:]
        string = newPrereq
        print(string)
        counter -= 1

    bob = "JUSTIN"
    print(bob[:4])
    sub = " including "
    print(
        ('1.5 credits, including [ WSTA01H3 or  WSTA03H3] and [0.5 credit at the B- or C-level in WST courses]',).count(
            sub))
    return string


# print(test("[[ MGEA02H3/( ECMA04H3) and  MGEA06H3/( ECMA06H3)] or [ MGEA01H3/( ECMA01H3) and  MGEA05H3/( ECMA05H3)]] and  MGAB01H3/( MGTB05H3)"))


def getIDSoptions():
    # Database location
    database = "/Users/riceboy/RiceBoy Documents/UTSC Course Tree/UtscCourses.db"
    # Create the db connection
    connection = createConnection(database)

    out = []
    options = ["AFSB51H3", "AFSB54H3", "ANTB05H3", "ANTB18H3", "GGRB28H3", "HISB30H3", "HISB51H3", "HISB58H3",
               "IDSB01H3", "IDSB02H3", "IDSB04H3", "IDSB06H3", "POLB90H3", "POLB91H3", "SOCB60H3"
               ]
    for course in options:
        out.append(course)
        description = checkIDSoptions(connection, course)
        out.append(description)

    index = 0
    while index < len(out):
        if index % 2 == 0 and index != 0:
            print("\n")
        print(out[index])
        index += 1


getIDSoptions()
"""


def courseDirectory():
    finalDir = []
    subDir = {}
    courses = {}
    idCounter = 0
    # Create the db connection
    connection = createConnection()
    # Get the sub directory
    subDirectory = getDirectory(connection, 123, "")
    # Run a loop to get the courses for each sub directory
    for y in subDirectory:
        subDir['id'] = idCounter
        subDir['name'] = y[1]
        subDir['children'] = []
        idCounter += 1
        print(str(y[1]) + "---" + str(y[0]))
        coursesDir = getDirectory(connection, 3, y[0])
        # Add the courses
        print(coursesDir)
        for z in coursesDir:
            courses['id'] = idCounter
            courses['name'] = z[0]
            idCounter += 1
            subDir['children'].append(courses)
            courses = {}

        finalDir.append(subDir)
        subDir = {}

    # End the connection
    endConnection(connection)

    # with open('data.json', 'w', encoding='utf-8') as f:
    # json.dump(finalDir, f, ensure_ascii=False, indent=4, separators=(',', ': '))

    return json.dumps(finalDir, indent=4, separators=(',', ': '))


print("ASDADSAD")
print(courseDirectory())
