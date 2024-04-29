from flask import Flask, render_template, request,url_for
import pickle

app = Flask(__name__,template_folder='templates')

# Load the trained model
with open("model\model.pkl", 'rb') as f:
    model = pickle.load(f)

# Route for the home page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/information')
def information():
    return render_template('information.html')

@app.route('/sugarmetrics')
def sugar():
    return render_template('sugarmetrics.html')

@app.route('/riskfactor')
def riskfactor():
    return render_template('riskfactor.html')

@app.route('/beverages')
def beverages():
    return render_template('beverages.html')

@app.route('/drink')
def drink():
    return render_template('drink.html')

@app.route('/juice')
def juice():
    return render_template('juice.html')

@app.route('/reference')
def reference():
    return render_template('reference.html')

@app.route('/sugarlink')
def sugarlink():
    return render_template('sugarlink.html')

@app.route('/prediction')
def prediction():
    return render_template('prediction.html')
# Route for handling form submission and making predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Retrieve form data
    pregnancies = float(request.form['Pregnancies'])
    # bmi = float(request.form['BMI'])
    age = float(request.form['Age'])
    height = float(request.form['Height'])
    weight = float(request.form['Weight'])
    bmi = weight/(height)**2
    print(pregnancies)
    print(bmi)
    print(age)
    # Make prediction using the loaded model
    prediction = model.predict([[pregnancies, bmi, age]])

    if prediction[0] == 1:
        result = "You may be at risk of developing the disease. We recommend consulting a doctor for further evaluation."
    else:
        result = "No need to worry! You currently show no signs of the disease. However, it's important to maintain a healthy lifestyle."

    return render_template('prediction.html', prediction=result)

if __name__ == '__main__':
    app.run(debug=True)
