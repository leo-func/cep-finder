import { useState } from "react";
import { Cep } from "../models/cep.model";
import { GetCEP } from "../services/cep.service";

export default function useCepViewModel() {
    const [cep, setCep] = useState("")
    const [address, setAddress] = useState<Cep | null> (null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null> (null)

    async function Get() {
        try{
            setLoading(true)
            setAddress(null)
            setError(null)
            
            const formattedCep = cep.replace(/\D/g, "")

            if(formattedCep.length != 8) {
                setError("CEP inválido.")
                return
            }

            const data = await GetCEP(formattedCep)

            if(data.erro) {
                setError("CEP não encontrado. ")
                return
            }

            setAddress(data)
            
        } catch (exception) {
            setError("Erro ao buscar CEP: " + exception)
        } finally {
            setLoading(false)
        }
    }

    return {
        cep,
        setCep,
        address,
        loading,
        error,
        Get,
    }
}