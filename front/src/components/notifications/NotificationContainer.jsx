import CurrentNotifications from "./currentNotifications/CurrentNotifications";
import HistoryNotifications from "./historyNotifications/HistoryNotifications";

function NotificationContainer() {
  return (
    <div className="w-full max-w-[360px] pr-[16px] pl-[16px]">
      <CurrentNotifications />
      <HistoryNotifications />
    </div>
  );
}

export default NotificationContainer;
