import activitiesImage from "../../../assets/images/notificaciones.svg";

function CardNotification() {
  return (
    <div
      className="py-4 border rounded-lg shadow-sm shadow-[#FCA044]"
      style={{ backgroundColor: "rgba(252, 160, 68, 0.05)" }}
    >
      <div className="pb-0 pt-2 px-2 flex flex-col items-start">
        <p className="text-xs uppercase font-bold text-[#280058]">19/02</p>
        <small className="text-sm  text-[#FF6969]">3 mensajes nuevos</small>
        <h4 className="font-bold text-xl text-[#280058]">Notificaciones</h4>
      </div>
      <div className="overflow-visible py-2 m-2 pt-5">
        <img
          alt="Card background"
          className="object-cover rounded-xl min-w-[136px]"
          src={activitiesImage}
          width={136}
        />
      </div>
    </div>
  );
}

export default CardNotification;
