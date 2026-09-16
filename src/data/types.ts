export interface DeviceSpecs {
  ram: string;
  memory: string;
  processor: string;
  spec_sheet_url: string;
}

export interface Device {
  id: number;
  name: string;
  purchased_date?: string;
  released_date?: string;
  acquired_year: number;
  usedTill?: string;
  note?: string;
  processor?: string;
  graphics_card?: string;
  specs?: DeviceSpecs;
  link: string;
  img: string;
}
