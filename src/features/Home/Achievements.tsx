const Achievements = ({
  number,
  description,
}: {
  number: string;
  description: string;
}) => {
  return (
    <div>
      <span className="text-xl font-semibold">{number}</span>
      <p>{description}</p>
    </div>
  );
};

export default Achievements;
