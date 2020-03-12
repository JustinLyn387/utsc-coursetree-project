import sqlite3
from sqlite3 import Error


def create_connection():
    """
    Create a database connection to the SQLite database
    """
    connection = None
    # Try connecting to the database
    try:
        connection = sqlite3.connect("CoursePrereqs.db")
    except Error as e:
        print(e)
    # Return the connection if available
    return connection


def end_connection(connection):
    """
    Function to close the connection when done
    """
    connection.close()


def insert_course_prereq(connection, course_code, prereq):
    sql = ''' INSERT INTO Courses(CourseCode, Prereq) VALUES(?,?) '''
    cur = connection.cursor()
    cur.execute(sql, [course_code, prereq])
    connection.commit()
    return cur.lastrowid


def insert_or_node(connection, parent_course_code, or_node_num, prereq):
    sql = ''' INSERT INTO OrPrereqs(OrNodeID, CourseCode) VALUES(?,?) '''
    cur = connection.cursor()
    OrNodeID = "OR_" + parent_course_code + or_node_num
    cur.execute(sql, [OrNodeID, prereq])
    connection.commit()
    return cur.lastrowid


def update_prereq(connection, course_code, prereq):
    sql = '''UPDATE Courses
                SET Prereq = ?
             WHERE CourseCode = ?'''
    cur = connection.cursor()
    cur.execute(sql, [prereq, course_code])
    connection.commit()
    return cur.lastrowid
