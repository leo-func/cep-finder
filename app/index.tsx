import useCepViewModel from "@/src/viewmodels/cep.viewmodel";
import CepView from "@/src/views/CepView";

export default function CepPage() {
  const model = useCepViewModel()
  return <CepView {...model}/>
}