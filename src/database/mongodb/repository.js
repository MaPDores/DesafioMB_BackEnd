export async function findOne(model, payload){
    try{
        return await model.findOne(payload);
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

export async function updateOne(model, query, payload){
    try{
        return await model.updateOne(query, payload, { upsert: true });
    }catch(err){
        console.log(err);
    }
}