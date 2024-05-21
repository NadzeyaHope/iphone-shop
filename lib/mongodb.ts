const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6';
const MongoDBclient = new MongoClient(url)


const employee = {
    patronymic: 'Olegovich',
    surname: 'Eparskii',
    age: 45,
    salary: 260000,
    department: 'DevRel',
    date_of_birth: '15.11.1977',
    first_name: 'Anton'
}

export const Insert = async () =>{
    try {
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")

        const iphones = MongoDBclient.db('iphone-shop').collection('iphones')
        await iphones.insertOne(employee)

        await MongoDBclient.close()
        console.log("Закрыли подключение")
    } catch (e) {
        console.log(e)
    }
}

Insert()