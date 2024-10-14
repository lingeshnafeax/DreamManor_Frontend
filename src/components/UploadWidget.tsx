import React, { createContext, useEffect, useState } from "react";

interface UploadWidgetProps<T extends string | string[]> {
  uwConfig: object;
  setState: React.Dispatch<React.SetStateAction<T>>;
}

interface CloudinaryScriptContextType {
  loaded: boolean;
}

const CloudinaryScriptContext = createContext<CloudinaryScriptContextType>({
  loaded: false,
});

function UploadWidget<T extends string | string[]>({
  uwConfig,
  setState,
}: UploadWidgetProps<T>) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const uwScript = document.getElementById("uw");

    if (!uwScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  const initializeCloudinaryWidget = () => {
    if (loaded && window.cloudinary) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            const imageUrl = result.info.secure_url as string;
            setState((prev) => {
              if (Array.isArray(prev)) {
                return [...prev, imageUrl] as T;
              } else {
                return imageUrl as T;
              }
            });
          }
        },
      );

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false,
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="border border-black bg-accent py-2"
        onClick={initializeCloudinaryWidget}
        disabled={!loaded}
      >
        Update Image
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
