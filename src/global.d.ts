// src/global.d.ts
export {};

declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        options: object,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: (error: any, result: any) => void,
      ) => { open: () => void };
    };
  }
}
