import pickle 
from flask import Flask, request, jsonify
import json
from PIL import Image
import numpy as np
from tensorflow.python.keras.models import load_model

app = Flask(__name__)

# colon_cancer_model = load_model('./models/colon_cancer.h5')
# lung_cancer_model = load_model('./models/efficientnetb3_lung.h5')

@app.route('/predict/breast-cancer', methods=['POST'])
def predict_breast_cancer():
    breast_cancer_model = pickle.load(open('./models/Resnet_BreastCancer.pkl', 'rb'))
    
    img = Image.open(request.files['image'])
    img= img.resize((300, 300), Image.LANCZOS )



    label_y = breast_cancer_model.predict([img])

    print(label_y)

    return jsonify({'report':label_y })
                   

# @app.route('/predict/lung-cancer', methods=['POST'])
# def predict_lung_cancer():
#     img = Image(json.loads(request.files['image']))
#     img= img.resize((224, 224))


#     label_y = lung_cancer_model.predict(img)

#     print(label_y)

#     return jsonify({'report':label_y})


# @app.route('/predict/colon-cancer', methods=['POST'])
# def predict():
#     img = Image(json.loads(request.files['image']))
#     img = img.resize((224, 224))


#     label_y = colon_cancer_model.predict(img)
#     label_y = np.argmax(label_y, axis = 1)

#     print(label_y)

#     return jsonify({'report': label_y})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)