const dotenv = require('dotenv').config()
const { Client } = require('@notionhq/client')

const page_id = process.env.NOTION_PAGE_ID

module.exports = async function getDatabeses() {
    const _payload = {
        path: `databases/${page_id}/query`,
        method: 'POST',
    }

    const { results } = await notion.request(_payload)

    const produtos = results.map((page) => {
        //Console.Log para ajudar a inserir campos
        //console.log(page.properties))
        return {
            Name: page.properties.Name.title[0].text.content,
            Status: page.properties.Status.formula.string,
        }
    })

    return produtos
}