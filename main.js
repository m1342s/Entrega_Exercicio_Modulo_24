function Carro(modelo,fabricante,anoModelo,anofabricacao,preco){
this.modelo=modelo
this.fabricante=fabricante
this.anoModelo=anoModelo
this.anofabricacao=anofabricacao
this.preco=preco
}



function Luxo(tipo,pais,blindagem,modelo){
    this.tipo=tipo
    this.pais=pais
    this.blindagem=blindagem
    Carro.call(this,modelo)
   
}

function Popular(marca,motor,pneus,preco) {
    this.marca=marca
    this.motor=motor
    this.pneus=pneus
    Carro.call(this,preco)
}

const revuelto= new Luxo("coupe","italia","nao","revuelto","lamborghini")
const kwid=new Popular("Renault",1.0,14,"kwid",73600)
const continental= new Luxo("coupe","inglaterra","sim","continental")
