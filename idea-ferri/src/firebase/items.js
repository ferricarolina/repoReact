import { getFirestore } from '../firebase/'
const db = getFirestore()

function consultar(consulta){
    var promise = new Promise(function(resolve, reject) {
        consulta.get().then((query) => {
            if(query.size === 0){
                console.log('No results!')
            }
            console.log('Items found!')
            const data = query.docs.map(doc => doc.data())
            resolve(data)
        }).catch((error) => {
            console.log('Error serching items', error)
        })
    });
    return promise;
}

function getItems(collection){
    const itemCollection = db.collection(collection)
    return consultar(itemCollection)
}

function getFilterItems(collection, {key, condition, value}){
    const itemCollection = db.collection(collection)
    const filterList = itemCollection.where(key, condition, value)
    return consultar(filterList)
}

function getItem(collection, id){
    const itemCollection = db.collection(collection)
    const item = itemCollection.where('id', '==', Number(id)).limit(1)

    return consultar(item)
}

export { getItems, getItem, getFilterItems };