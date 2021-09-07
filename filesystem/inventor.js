// CRUD de iventores
const fs = require('fs');
const PATH = './data/inventors.json';

// Lectura
function getInventors(){
    let data = fs.readFileSync(PATH, 'utf-8');
    let dataInventors = JSON.parse(data);
    return dataInventors.inventors;
}

function getInventor(id){
    return getInventors()
        .filter(inventor => inventor._id === id);
}

// Alta
function pushInventor(inventor){
    let inventors = getInventors();
    inventors.push(inventor);
    fs.writeFileSync(PATH, JSON.stringify({"inventors": inventors}, null, 4), 'utf-8');
}

// Modificacion 
function updatIventor(id, inventor){
    let inventors = getInventors();
    
    
    let index = inventors.findIndex((inv => inv._id == id));

    if (index != -1) {
        inventors[index]._id = inventor._id;
        inventors[index].first = inventor.first;
        inventors[index].last = inventor.last;
        inventors[index].year = inventor.year;
    
        fs.writeFileSync(PATH, JSON.stringify({"inventors": inventors}, null, 4), 'utf-8');
    } else {
        console.log("ERROR: id " + id + " not found.");
    }
}

// Eliminacion
function deleteInventor(id){
    let inventors = getInventors();

    let index = inventors.findIndex((inv => inv._id == id));
    if (index != -1) {        
        inventors.splice(index, 1);

        fs.writeFileSync(PATH, JSON.stringify({"inventors": inventors}, null, 4), 'utf-8');
    } else {
        console.log("ERROR: id " + id + " not found.");
    }
}

module.exports = {getInventor, getInventors, pushInventor, deleteInventor, updatIventor};
