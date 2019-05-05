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

export async function find(model, payload){
    try{
        return await model.find(payload);
    }catch(err){
        console.log(err);
    }
}

export async function update(model, payload){
    try{
        return await model.update(contition, payload.data, payload.filter);
    }catch(err){
        console.log(err);
    }
}

export async function findOne(model, payload){
    try{
        return await model.findOne(payload);
    }catch(err){
        console.log(err);
    }
}