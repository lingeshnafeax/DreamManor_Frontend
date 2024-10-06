import React, { createContext, useEffect, useState } from "react";

// Define the type for uwConfig (Cloudinary Upload Widget Config)
interface UploadWidgetProps {
  uwConfig: object; // You can define a more specific type based on the Cloudinary Upload Widget options

  setAvatar: (avatar: string) => void;
}

// Define the context type
interface CloudinaryScriptContextType {
  loaded: boolean;
}

// Create a context with a default value
const CloudinaryScriptContext = createContext<CloudinaryScriptContextType>({
  loaded: false,
});

const UploadWidget: React.FC<UploadWidgetProps> = ({ uwConfig, setAvatar }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    const uwScript = document.getElementById("uw");

    if (!uwScript) {
      // If not loaded, create and load the script
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    } else {
      // If script is already present, set loaded to true
      setLoaded(true);
    }
  }, [uwConfig]); // Ensure dependencies are stable

  const initializeCloudinaryWidget = () => {
    if (loaded && window.cloudinary) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setAvatar(result.info.url);
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
        disabled={!loaded} // Disable button until script is loaded
      >
        Update Image
      </button>
    </CloudinaryScriptContext.Provider>
  );
};

export default UploadWidget;
export { CloudinaryScriptContext };
