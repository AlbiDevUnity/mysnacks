import Navbar from "../components/NavBar";

export default function Page() {

    async function onSubmitForm(event){

        event.preventDefault()
        const data = {
            nome: event.target.nome.value,
            tipologia: event.target.tipologia.value,
            quantita: event.target.quantita.value,
            prezzo: event.target.prezzo.value,           
          }

        const response = await fetch("/api/snack", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })

          const snack = await response.json()
    }
  return (
    <>
      <Navbar></Navbar>

      <form method="POST" onSubmit={onSubmitForm    }>
        <div className="form-group">
          <label htmlFor="nomeInput">Nome</label>
          <input type="text" className="form-control" id="nomeInput" name="nome"/>
        </div>
        <div className="form-group">
          <label htmlFor="TipologiaInput">Tipologia</label>
          <input type="text" className="form-control" id="TipologiaInput" name="tipologia"/>
        </div>
        <div className="form-group">
          <label htmlFor="QuantitaInput">Quantità</label>
          <input type="numeric" className="form-control" id="QuantitaInput" name="quantita"/>
        </div>
        <div className="form-group">
          <label htmlFor="prezzoInput">Prezzo</label>
          <input type="numeric" className="form-control" id="prezzoInput" name="prezzo"/>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
