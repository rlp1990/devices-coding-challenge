import { Industry } from "../../industry/models/industry";

/**
 * @param id Device object unique id (must be incremental)
 * @param name Device object name
 * @param warehouseAdditionTime Date object to register the Device object addition time
 * @param numberOfDevices the number of devices
 * @param fee the tax fee of the device
 * @param linkedIndrustry industry object associated
 */
export interface Device {
    id: string;
    name: string;
    warehouseAdditionTime: Date;
    numberOfDevices: number;
    fee: number;
    linkedIndrustry: Industry;
}
