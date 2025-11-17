const url =  'https://api-ebac.vercel.app/api/efood/restaurantes'

export async function requisicao(){
    const res = await fetch(url)
    const content = await res.json()
    return content
}