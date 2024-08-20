const FeaturesCard = ({
  heading,
  description,
  logo,
}: {
  heading?: string;
  description: string;
  logo: JSX.Element;
}) => {
  return (
    <div className="flex items-center gap-x-1">
      <div>{logo}</div>
      <div>
        {heading && <p className="text-md">{heading}</p>}
        <h1 className="text-xs">{description}</h1>
      </div>
    </div>
  );
};

export default FeaturesCard;
