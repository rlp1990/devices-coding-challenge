import { FormBase } from "../../forms/models/form.base";

/**
 * @param warehouseAdditionTime Date object to register the Device object addition time
 * @param numberOfDevices the number of devices
 * @param fee the tax fee of the device
 * @param linkedIndrustry industry unique id associated
 */
export interface Device extends FormBase {
    warehouseAdditionTime: Date;
    numberOfDevices: number;
    fee: number;
    linkedIndrustry: number;
}
