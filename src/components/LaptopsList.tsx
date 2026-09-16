import laptops from "@/data/laptops";
import DeviceItem from "./DeviceItem";

function LaptopsList() {
  return (
    <div className="devices-list-container">
      <h2>Laptops</h2>
      <div className="devices-list">
        {laptops.map((item) => (
          <DeviceItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LaptopsList;
