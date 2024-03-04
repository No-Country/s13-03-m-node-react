function UrgentNotifications() {
  //const [selectedKeys, setSelectedKeys] = useState(new Set(["Filtros"]));

  /* const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );*/
  return (
    <div id="urgent-notification-container" className="mt-10 ">
      <div id="urgent-notification-title">
        <h2 className="text-[#280058] ">Notificaciones urgentes</h2>
      </div>
      <div id="urgentNotification-card">
        <div className="max-w-[340px] mt-5 border rounded-xl bg-white shadow-sm shadow-[#67B7B3]">
          <div className="px-4 py-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <img
                  className="w-10 h-10 border-2 border-[#7828c8] rounded-lg"
                  src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/92/92a1/92a13834-fb16-179a-f71f-968524312368/29bfa12c-a5f0-f152-5af2-4449a919387d.jpg"
                  alt="Avatar"
                />
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold leading-none text-[#280058] ">
                    Excursion Museo de Historia
                  </h4>
                  <h5 className="text-xs text-[#280058] ">19/02/2024</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-sm text-[#280058]">
            <p>Estimados Padres,</p>
            <p>
              Les informamos que la hora de regreso de la excursión al Museo de
              Historia ha sido ajustada. El nuevo horario de retorno al colegio
              será a las 06:30 PM. Agradecemos su comprensión.
            </p>
          </div>
          <div className="px-4 py-3 flex items-center justify-end">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded accent-[#67B7B3] text-white"
              />
              <span className="ml-2 text-sm text-[#280058]">Leído</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrgentNotifications;
