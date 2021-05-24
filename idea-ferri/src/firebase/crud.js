import { getFirestore, consultar, agregar } from '.'

const db = getFirestore()

function getCollection(collection){
    const Collection = db.collection(collection)
    return consultar(Collection)
}

function getCollectionByFilter(collection, {key, condition, value}){
    const Collection = db.collection(collection)
    const filterList = Collection.where(key, condition, value)
    return consultar(filterList)
}

function getCollectionItemById(collection, id){
    const Collection = db.collection(collection)
    const item = Collection.where('id', '==', Number(id)).limit(1)

    return consultar(item)
}

function createItem(collection, data){
    const Collection = db.collection(collection)
    
    return agregar(Collection, data)
}

async function updateStock(items){ 
    const Collection = db.collection('items')
    const filterList = Collection.where('id', 'in', items.map(i => i.id))

    const query = await filterList.get()
    const batch = db.batch();

    const outOfStock = []
    query.docs.forEach((docSnapshot) => {
        const item = items.filter(i => i.id === docSnapshot.data().id)[0]

        if(docSnapshot.data().stock >= item.quantity){
            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - item.quantity})
        } else {
            outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id })
        }
    })

    if(outOfStock.length === 0){
        await batch.commit()
        console.log('Items updated!')
        return true
    } else {
        console.log('Error updating items')
        return false
    }
}

export { getCollection, getCollectionItemById, getCollectionByFilter, createItem, updateStock };