/**
 * Created by dedn on 2/27/17.
 */
var fs = require('fs');

var data = fs.readFileSync('website/data/product.json');

var product = JSON.parse(data);
console.log(product)

app.get('/', addValue);

function addValue(request, response) {
    var values = target.closest('li').querySelector('.product-item__counter').textContent;
    var data = request.params;
    var value = Number(data.value);
    var reply;

    values[value] = value;

    console.log(values);

    var data = JSON.stringify(values, null, 2);
    fs.writeFile('website/data/product.json', data, finished);

    response.send(reply);
}