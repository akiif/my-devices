import PhonesList from "./PhonesList";
import TabletsList from "./TabletsList";
import LaptopsList from "./LaptopsList";

function DeviceList() {
  return (
    <section className="devices-list-section">
      <PhonesList />
      <hr />
      <TabletsList />
      <hr />
      <LaptopsList />
    </section>
  );
}

export default DeviceList;
