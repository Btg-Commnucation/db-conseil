import { TPage } from "../../routes/Page";
import he from "he";

const Mention = ({ data }: { data: TPage }) => {
  return (
    <main className="cabinet">
      <div className="container">
        <h1>{he.decode(data.title)}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div>
    </main>
  );
};

export default Mention;
