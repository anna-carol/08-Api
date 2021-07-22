class MobiliaDAO{

    constructor(db){
        this.db = db
    }
    getAllMobilia(){
        return new Promise((resolve, reject) =>{
            this.db.all("SELECT * FROM MOBILIA", (err, rows) =>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    insertMobilia(mobilia){
        return new Promise((resolve, reject) =>{
            this.db.run("INSERT INTO MOBILIA(TIPOMOBILIA, COR, MANUTENCAO) VALUES (?,?,?)", Object.values(mobilia), (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    deteleMobiliaFromId(id){
        return new Promise((resolve, reject) =>{
            this.db.all("DELETE FROM MOBILIA WHERE ID = (?)", id, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
}

module.exports = MobiliaDAO