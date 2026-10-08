/** Where a deck is persisted. */
export const StorageLocation = {
  Local: "local",
  Cloud: "cloud",
} as const;

export type StorageLocation =
  (typeof StorageLocation)[keyof typeof StorageLocation];

export interface StorageLocationInfo {
  /** Label for the save button. */
  saveLabel: string;
  /** Short label for showing where a deck lives. */
  label: string;
  /** Only logged-in users may save here. */
  requiresAuth: boolean;
}

export const STORAGE_LOCATION_INFO: Record<
  StorageLocation,
  StorageLocationInfo
> = {
  [StorageLocation.Local]: {
    saveLabel: "Save locally",
    label: "Local",
    requiresAuth: false,
  },
  [StorageLocation.Cloud]: {
    saveLabel: "Save on the cloud",
    label: "Cloud",
    requiresAuth: true,
  },
};
