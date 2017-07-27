import arrayFrom from './Array/from';

const render = (fn) => {
    const app = document.createElement('h2');
    app.id = 'app';
    app.innerHTML = 'test';
    app.style.textAlign = 'center';
    document.body.appendChild(app);
    const resultDIV = document.createElement('div');
    resultDIV.id = 'result'
    const result = fn();
    resultDIV.innerHTML = Object.keys(result)
        .map(key => result[key]).join('--------');
    document.body.appendChild(resultDIV);
};

render(arrayFrom);
