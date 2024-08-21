const Message = ({ text, img }: { text: string; img: string }) => {
  return (
    <div className="flex w-full items-center gap-x-3 rounded-xl bg-accent/10 p-3">
      <img src={img} className="h-10 w-10 rounded-full object-cover" alt="" />
      <p>{text}</p>
    </div>
  );
};

export default Message;
