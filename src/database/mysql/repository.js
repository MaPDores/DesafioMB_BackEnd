export async function create(model, payload){
    try{
        return await model.create(payload);
    }catch(err){
        console.log(err);
    }
}

export async function findOrCreate(model, payload){
    try{
        return await model.findOrCreate(payload);
    }catch(err){
        console.log(err);
    }
}

export async function findAll(model, payload){
    try{
        return await model.findAll(payload);
    }catch(err){
        console.log(err);
    }
}

export async function find(model, query){
    try{
        return await model.find(query);
    }catch(err){
        console.log(err);
    }
}

export async function update(model, payload, query){
    try{
        return await model.update(payload, query);
    }catch(err){
        console.log(err);
    }
}

export async function findOne(model, query){
    try{
        return await model.findOne(query);
    }catch(err){
        console.log(err);
    }
}