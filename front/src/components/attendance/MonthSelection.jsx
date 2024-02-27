
const MonthSelection = ({ handleChange, month }) => {
  return (
    <div className="border-1 rounded-md border-orange-500 shadow-lg shadow-orange-500 p-2 m-2 flex justify-between bg-white">
      <select className="w-full text-xl bg-white" onChange={handleChange} value={month}>
        <option value="enero">Enero</option>
        <option value="febrero">Febrero</option>
        <option value="marzo">Marzo</option>
        <option value="abril">Abril</option>
        <option value="mayo">Mayo</option>
        <option value="junio">Junio</option>
        <option value="julio">Julio</option>
        <option value="agosto">Agosto</option>
        <option value="septiembre">Septiembre</option>
        <option value="octubre">Octubre</option>
        <option value="noviembre">Noviembre</option>
        <option value="diciembre">Diciembre</option>
      </select>
    </div>
  )
}

export default MonthSelection