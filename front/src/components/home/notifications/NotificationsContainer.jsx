import CardNotification from "./CardNotification";

const cardNotificationInfo = [
  {
    date: "19/05/23",
    quantity: 3,
    title: "Notification lala 1",
  },
  {
    date: "19/05/24",
    quantity: 5,
    title: "Notification lala 2",
  },
  {
    date: "19/05/25",
    quantity: 2,
    title: "Notification lala 3",
  },
  {
    date: "19/05/26",
    quantity: 7,
    title: "Notification lala 4",
  },
  {
    date: "19/05/27",
    quantity: 1,
    title: "Notification lala 5",
  },
];

function NotificationsContainer() {
  return (
    <div className="w-screen pl-[16px] pr-[16px]">
      <h2 className="text-[20px] font-bold">¿Qué tenemos hoy?</h2>
      <div
        id="card-notification-container"
        className="flex flex-row space-x-[20px] justify-between mt-5"
      >
        {cardNotificationInfo.slice(-2).map((notification, index) => (
          <CardNotification key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
}

export default NotificationsContainer;