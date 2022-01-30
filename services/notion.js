const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')

// Init client
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})

const database_id = process.env.NOTION_DATABASE_ID

module.exports = async function getCompras() {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST',
    }

    const { results } = await notion.request(payload)

    const compras = results.map((page) => {
        //Console.Log para ajudar a inserir campos
        //console.log(page.properties)
        return {
            id: page.id,
            Descricao: page.properties.Descricao.rich_text[0].text.content,
            ID_da_compra: page.properties.ID_da_compra.title[0].text.content,
            Data_da_compra: page.properties.Data_da_compra.date.start,
            Data_do_envio: page.properties.Data_do_envio.date.start,
            Data_estimada_de_entrega: page.properties.Data_estimada_de_entrega.formula.date.start,
        }
    })

    return compras
}