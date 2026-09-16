import phones from "@/data/phones";
import DeviceItem from "./DeviceItem";

function PhonesList() {
  return (
    <div className="devices-list-container">
      <h2>Phones</h2>
      <div className="devices-list">
        {phones.map((item) => (
          <DeviceItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PhonesList;
