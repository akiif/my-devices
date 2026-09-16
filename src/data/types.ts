export interface DeviceSpecs {
  processor?: string;
  gpu?: string;
  ram?: string;
  storage?: string[];
  display?: string;
  camera?: string;
  spec_sheet_url?: string;
}

export interface Device {
  id: number;
  name: string;
  purchased_date?: string;
  released_date?: string;
  acquired_year: number;
  usedTill?: string;
  note?: string;
  specs?: DeviceSpecs;
  link: string;
  img: string;
}
