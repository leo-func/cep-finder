export async function GetCEP(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    return await response.json()
    
}