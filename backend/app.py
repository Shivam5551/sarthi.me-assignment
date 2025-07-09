from flask import Flask, request, jsonify
import random

app = Flask(__name__)

@app.route("/", methods=["POST"])
def emotionAnalyzer():
    if request.method == "POST":
        emotions = ["Happy", "Sad", "Anxious","Angry", "Excited", "Calm", "Confused"]
        form = request.form.get("data")
        if form:
            response = {
                            "emotion": emotions[random.randint(0, (len(emotions)-1))], 
                            "confidence": round(random.random(), 2)
                       }
            return jsonify(response), 200
        else: 
            return jsonify({ "message": "Data required" }), 400
