type CardProps = {
  title: string;
  body: string;
};

function Card({ title, body }: CardProps) {
  return (
    <article className="bg-dark-background w-[300px] h-[250px] p-5 rounded-xl border-[1px] border-placeholder-dark">
      <p className="text-lg font-bold">{title}</p>
      <p className="text-balance">{body}</p>
    </article>
  );
}

export default Card;
