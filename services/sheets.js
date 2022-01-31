const getCompras = require('./notion');
var axios = require("axios");

function salvar(ID_da_compra, Produtos, Data_da_compra, Data_do_envio, Data_estimada_de_entrega, Descricao) {
    axios.post('https://sheetdb.io/api/v1/ten2d58oeocj8', {
        "data": {
            "ID da compra": ID_da_compra,
            "Produtos": Produtos,
            "Data da compra": Data_da_compra,
            "Data do envio": Data_do_envio,
            "Data estimada de entrega": Data_estimada_de_entrega,
            "Descrição": Descricao,
        }

    }, {
        "auth": {
            "username": "d6rs77sh",
            "password": "a56vhlbjqe0dobna8of4"
        }
    }).then(response => {
        console.log(response.data)
    })
}

const compras = getCompras()

salvar(compras.ID_da_compra, compras.Produtos, compras.Data_da_compra, compras.Data_do_envio, compras.Data_estimada_de_entrega, compras.Descricao)
console.log("OK")

function coletar() {
    axios.get('https://sheetdb.io/api/v1/b0mh027fqr3xx/keys', {
            "auth": {
                "username": "n3u0jjij",
                "password": "l4n5mz5i6a3215ogpn30"
            }
        })
        .then(response => {
            console.log(response.data);
        });
}

//coletar()

function ProdutoDe(Descricao) {
    axios.get(`https: //sheetdb.io/api/v1/b0mh027fqr3xx/search?'Descrição'=${Descricao}`, {
            "auth": {
                "username": "n3u0jjij",
                "password": "l4n5mz5i6a3215ogpn30"
            }
        })
        .then(response => {
            const data = response.data;
            const Descricao = data[0]
            const Produto = ID_da_compra.Produto
            console.log(response.data);
        });
}

//ProdutoDe("Cadeira")

function atualizarProduto(Descricao, Produto) {
    axios.patch(`https://sheetdb.io/api/v1/b0mh027fqr3xx/Descrição/${Descricao}`, {
            "data": {
                "Produto": Produto
            }

        }, {
            "auth": {
                "username": "n3u0jjij",
                "password": "l4n5mz5i6a3215ogpn30"
            }
        })
        .then(response => {
            console.log(response.data);
        });
}

//atualizarProduto("Cadeira", "Produto 1")