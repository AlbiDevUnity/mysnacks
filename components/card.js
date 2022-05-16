
export default function card({ snack }) {

  return (
    <>
      <div className="card text-center border-dark mb-3" style={{width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{snack.nome}</h5>
          <p className="card-text">Id: {snack.id}</p>
          <p className="card-text">Tipologia: {snack.tipologia}</p>
          <p className="card-text">Quantità: {snack.quantita}</p>
          <p className="card-text">Prezzo: {snack.prezzo}</p>
        </div>
      </div>
    </>
  );
}
