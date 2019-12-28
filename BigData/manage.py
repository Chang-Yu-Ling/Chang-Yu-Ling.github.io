from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('main.html')

# @app.route('/result/<responses>')
# def result(responses):
#     return render_template('result.html', responses= responses)

@app.route('/search', methods=['GET', 'POST'])
def search():
    # if request.method == 'POST':
    #     return redirect(url_for('result', responses=request.form.get('responses')))
    #
    # return render_template('main.html')
    searchText = request.form['responses']
    return render_template('result.html', responses = searchText)


if __name__ == '__main__':
    # app.debug = True
    app.run(host = '0.0.0.0', port = 5000, debug = True)