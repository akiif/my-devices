import tablets from "@/data/tablets";
import DeviceItem from "./DeviceItem";

function TabletsList() {
  return (
    <div className="devices-list-container">
      <h2>Tablets</h2>
      <div className="devices-list">
        {tablets.map((item) => (
          <DeviceItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TabletsList;
