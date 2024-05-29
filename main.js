function Carro(modelo,fabricante,anoModelo,anofabricacao,preco){
this.modelo=modelo
this.fabricante=fabricante
this.anoModelo=anoModelo
this.anofabricacao=anofabricacao
this.preco=preco
}

const revuelto= new Carro("revuelto","lamborghini","2025","2024",608.358)
const veyron=new Carro("veyron","bugatti","2006","2005",1700000)
const continental= new Carro("continental","bentley","2013","2012",219.930)

function Luxo(tipo,pais,blindagem){
    this.tipo=tipo
    this.pais=pais
    this.blindagem=blindagem
    Carro.call(this,modelo)
    Carro.call(this,fabricante)
    Carro.call(this,preco)
}

function Popular(marca,motor,pneus) {
    this.marca=marca
    this.motor=motor
    this.pneus=pneus
    Carro.call(this,modelo)
    Carro.call(this,preco)
}