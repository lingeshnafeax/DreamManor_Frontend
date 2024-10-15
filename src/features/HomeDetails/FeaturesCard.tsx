const FeaturesCard = ({
  heading,
  description,
  type = "info",
  logo,
}: {
  heading?: string;
  type?: "info" | "distance";
  description: number | string;
  logo: JSX.Element;
}) => {
  return (
    <div className="flex items-center gap-x-1">
      <div>{logo}</div>
      <div>
        {heading && <p className="text-md">{heading}</p>}
        <h1 className="text-xs">
          {description} {type === "distance" ? "kms away" : ""}
        </h1>
      </div>
    </div>
  );
};

export default FeaturesCard;
