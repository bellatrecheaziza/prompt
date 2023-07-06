import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Découvrir & Partager
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">
          Les meilleurs Prompt GPT
        </span>
      </h1>
      <br />
      <h1 className="orange_gradient text-center">
        Best Prompt est un outil de creation et de partage de Prompt
      </h1>
      <br />
      <p className="desc text-center">
        Qu'est-ce qu'un prompt sur ChatGPT ? Sur ChatGPT, un prompt est une
        phrase ou un court texte que l'utilisateur entre dans l'interface pour
        demander une réponse ou une continuation de la conversation, autrement
        dit une invite. Il sert à initier une interaction entre l'utilisateur et
        l'intelligence artificielle. En effet, en fonction de la nature du
        prompt, ChatGPT va proposer une réponse pertinente ou une suite logique
        de la conversation.{" "}
      </p>
      <Feed />
    </section>
  );
};
export default Home;
