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
    getOneMobilia(id){
        return new Promise((resolve, reject) =>{
            this.db.all("SELECT * FROM MOBILIA WHERE ID = (?)", id, (err, rows) =>{
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
            this.db.run("DELETE FROM MOBILIA WHERE ID = (?)", id, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    deteleMobiliaFromTipo(tipomobilia){
        return new Promise((resolve, reject) =>{
            this.db.run("DELETE FROM MOBILIA WHERE TIPOMOBILIA = (?)", tipomobilia, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    deteleMobiliaFromCor(cor){
        return new Promise((resolve, reject) =>{
            this.db.run("DELETE FROM MOBILIA WHERE COR = (?)", cor, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    deteleMobiliaFromManutencao(manutencao){
        return new Promise((resolve, reject) =>{
            this.db.run("DELETE FROM MOBILIA WHERE MANUTENCAO = (?)", manutencao, (err) =>{
                if(err){
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    }
    updateMobilia(id, mobilia){
        return new Promise((resolve, reject) => {
            this.db.run("UPDATE MOBILIA SET TIPOMOBILIA = (?), COR = (?), MANUTENCAO = (?) WHERE ID = (?)", [mobilia[0], mobilia[1], mobilia[2], id], (err) =>{
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