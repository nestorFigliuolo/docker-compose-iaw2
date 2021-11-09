from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello_world():
    string = request.args.get('string')
    return string.upper()