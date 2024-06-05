import cardsData from "../data";

export default function CardsFeatures() {
  const { cardsData: card } = cardsData;

  const cardStyle = {
    boxShadow: `0px 0.5px 0px 0px #FFFFFF80 inset,
                0px -2px 40px 0px #BB9BFF26,
                0px -2px 10px 0px #E9DFFF4D`,
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="grid grid-cols-2 gap-6 max-[1024px]:grid-cols-1">
        {card.slice(0, 2).map((card, index) => (
          <div key={index} className="flex">
            <div
              className="flex h-full w-full flex-col justify-between rounded-3xl p-14"
              style={cardStyle}
            >
              <div>
                <img
                  src={card.src}
                  alt="icon"
                  style={card.shadow}
                  className="w-[50px] rounded-lg"
                />
                <h1 className="pb-3 pt-4 text-[32px] text-[#ECECEC]">
                  {card.title}
                </h1>
                <p className="text-[#ECECEC]">{card.caption}</p>
              </div>
              <p className="mt-8 cursor-pointer text-white underline">
                {card.viewLink}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-20 flex h-full w-full flex-row justify-between rounded-3xl p-14 max-lg:mt-6 max-md:flex-col"
        style={cardStyle}
      >
        <div className="flex w-1/2 pr-4 max-lg:w-1/2 max-md:w-full">
          <div>
            <img
              src={card[2].src}
              alt="icon"
              style={card[2].shadow}
              className="w-[50px] rounded-lg"
            />
            <h1 className="pb-3 pr-8 pt-4 text-[32px] text-[#ECECEC]">
              {card[2].title}
            </h1>
            <p className="w-full max-w-md text-[#ECECEC] max-sm:w-full">
              {card[2].caption}
            </p>
            <p className="mt-8 cursor-pointer text-white underline">
              {card[2].viewLink}
            </p>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center max-lg:mt-8 max-md:w-full">
          <img
            src={card[2].imageCode}
            alt="DigitalToken.js code"
            style={cardStyle}
            className="rounded-3xl"
          />
        </div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa
      totam officia? Alias totam, rerum nostrum perferendis repudiandae
      inventore tempora quas laborum modi illum odio, corrupti amet! Voluptatem
      autem corrupti ipsum cumque, explicabo aut ullam itaque eaque quae magnam
      ratione libero veniam nulla, tenetur saepe. Ad, consequuntur cupiditate
      fugit ut commodi beatae tenetur quae ratione voluptatem dicta eius eaque!
      Ex rerum culpa animi fugit assumenda illum quam eligendi corrupti,
      incidunt voluptas doloremque nesciunt atque consectetur dolorem quos
      numquam deserunt est aut aperiam quidem officiis cupiditate alias
      exercitationem! Earum commodi incidunt eligendi sequi eos nihil officia ea
      molestias quasi, iure non assumenda veniam dolorem autem repellendus
      repudiandae quam rem. Nulla consectetur veniam et molestiae fugiat error
      sequi, ab nostrum voluptates deserunt culpa facilis cupiditate aperiam
      doloremque ad excepturi impedit sed vitae repudiandae suscipit. Vitae
      ducimus culpa voluptatem deserunt, quia omnis nisi deleniti ad dolore
      debitis aliquam necessitatibus rerum suscipit maiores! Quae, voluptas
      dolores cumque eius voluptatibus laudantium. Ullam cum exercitationem
      officia voluptatem non! Voluptas sunt, molestias cumque qui, ipsa earum
      temporibus optio facilis sequi officia unde accusamus pariatur
      reprehenderit suscipit repellat mollitia reiciendis quas repudiandae.
      Commodi, eligendi! Deleniti, animi rem ab quis deserunt corrupti maxime
      nihil ipsa eligendi nemo voluptatem debitis possimus placeat sequi veniam
      laudantium laboriosam sed fugiat. Numquam odio voluptatem provident
      eveniet veritatis possimus corrupti voluptatum, explicabo, deleniti
      officiis esse voluptatibus deserunt ad fugit, commodi repellat quae cumque
      quis molestias magni minima optio cupiditate ipsum obcaecati. Numquam
      dignissimos provident, possimus laborum inventore aperiam aspernatur,
      dolorem iure quibusdam facilis eligendi neque id consectetur voluptate
      cum. Nulla ipsam rem ipsum consectetur accusamus aut nemo, repellendus
      deserunt pariatur eius quisquam quo vero maxime ut animi porro harum
      dignissimos voluptate dolorem accusantium modi quaerat laborum nihil a?
      Neque impedit eos quam nihil quia reprehenderit non quo accusantium et,
      dolorem excepturi iusto facere iste, tempora exercitationem perspiciatis
      aliquam totam corrupti doloremque, itaque molestiae at deleniti.
      Asperiores, distinctio aut quod ab, ipsam assumenda, unde incidunt qui
      vero vel expedita et nostrum provident porro beatae doloribus similique
      inventore corporis esse aliquam dignissimos. Distinctio assumenda sint
      laudantium quod veritatis, asperiores autem dolores iste minima aliquam
      unde numquam enim quidem impedit dolorum est consequuntur? Harum
      repellendus omnis assumenda nulla voluptatibus possimus. Illo corporis
      consectetur ut neque temporibus nobis! Repellendus temporibus inventore
      necessitatibus quo laudantium doloribus pariatur similique fuga. Sunt
      temporibus quisquam quasi ut. Quisquam, vero corporis inventore quas optio
      architecto vel aut, fugiat adipisci laborum quasi expedita, explicabo amet
      ea animi voluptates nam neque. Velit voluptates amet necessitatibus optio
      aut, impedit rem fugiat, ullam praesentium unde eligendi adipisci facilis
      perferendis fugit. Corporis temporibus quas possimus minus aut eligendi
      perferendis ratione natus quos repellat! Itaque, adipisci? Perspiciatis
      quas ducimus eius libero repellat quisquam saepe rerum corrupti
      voluptatibus quam adipisci, voluptatem tenetur dolorem accusamus impedit
      ipsam, aut ullam esse numquam nobis cupiditate odit non? Accusamus
      consequuntur non maiores porro unde ducimus, excepturi vero ipsum est
      quibusdam, quasi amet numquam quidem ipsam eveniet exercitationem
      necessitatibus veniam saepe eligendi pariatur minus provident temporibus
      dicta harum? Inventore nostrum delectus rem nobis. Maiores, voluptatibus.
    </div>
  );
}
