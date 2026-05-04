// lib/copy.js
// Edini vir resnice za CELOTNO vidno besedilo na pristajalni strani.
// Vsak niz, ki ga uporabnik lahko prebere na zaslonu, MORA biti tukaj.

export const copy = {
  metadata: {
    title: "101 Domačih Burgerjev | Digitalna knjiga receptov",
    description:
      "Digitalna knjiga receptov za domače burgerje. 101 preprost, sočen in izjemno okusen recept, s katerim boš doma pripravljal burgerje, ki se jim ni mogoče upreti.",
  },

  promoBar: {
    text: "Posebna časovno omejena ponudba",
    icon: "flame",
  },

  hero: {
    eyebrow: "Digitalna knjiga receptov za domače burgerje",
    headline: {
      pre: "101 domač burger, s katerim boš",
      accent: "očaral vse doma",
    },
    subheadline:
      "Odkrij preproste, sočne in noro okusne recepte za vrhunske burgerje brez nepotrebnega kompliciranja, zapravljanja in zanašanja na hitro hrano.",
    paragraph:
      "Spremeni vsak obrok v poseben trenutek s preprostimi in okusnimi idejami, popolnimi za druženje z družino in prijatelji.",
    stats: [
      { value: "101", label: "okusnih idej" },
      { value: "Domače", label: "z okusom po restavraciji" },
    ],
    bullets: [
      "101 različnih receptov",
      "Sočni in povsem preprosti burgerji",
      "Dostopne in vsakdanje sestavine",
      "Različice z govedino, piščancem in še več",
      "Idealno za večerje in vikend druženja",
      "Domač okus na nivoju pravih restavracij",
    ],
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Takojšen dostop" },
      { icon: "mail", text: "Prejmeš na e-mail" },
      { icon: "card", text: "Varno plačilo" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "Komplet 101 Domačih Burgerjev - Digitalna knjiga",
    badge: "101 okusnih idej",
  },

  story: {
    eyebrow: "Okusne hrane ti ni treba vedno naročati",
    headline: {
      pre: "Ni ti treba od doma, če želiš uživati v",
      accent: "resnično neverjetnem burgerju",
    },
    paragraphs: [
      {
        text: "Včasih težava ni v tem, da nismo lačni… težava je, da nam zmanjka idej, kako pripraviti nekaj sočnega, drugačnega in s tistim pravim okusom, ki te prisili, da hočeš še.",
        style: "default",
      },
      {
        text: "Pripravljeno doma in noro dobrega okusa",
        style: "bold-accent",
      },
    ],
    painsTitle: "Ko zmanjka idej ali izbire, se zgodi tole:",
    pains: [
      "Na koncu vedno znova pripraviš eno in isto",
      "Burgerji postanejo suhi ali pa so čisto brez okusa",
      "Ne veš natančno, kako kombinirati omake, sire in dodatke",
      "Naročiš hitro hrano, čeprav bi si z lahkoto skuhal doma",
      "Ostaneš popolnoma brez idej za večerjo med tednom ali za vikend",
    ],
    bridge:
      "Razlika je v tem, da imaš pri roki jasne recepte, okusne kombinacije in preproste korake, s katerimi se prav vsak burger spremeni v nekaj zares posebnega.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Domač burger, pripravljen za postrežbo",
  },

  steps: {
    eyebrow: "Samo 3 koraki do domačega užitka",
    headline: {
      pre: "Končno preprost način za pripravo",
      accent: "nepremagljivih domačih burgerjev",
      post: "za vso družino",
    },
    subheadline:
      "Uživaj v sočnih, preprostih in noro okusnih receptih, ne da bi moral iz hiše, brez kompliciranja in brez nenehnega ponavljanja enih in istih jedi.",
    paragraph:
      "Vse kar moraš storiti je, da izbereš recept, slediš nekaj preprostim korakom in uživaš v hrani, po kateri bodo vsi hoteli repete.",
    items: [
      {
        number: "01",
        title: "Izberi burger za vsako priložnost",
        body: "Od hitre večerje med tednom do sproščenega vikenda z družino – imel boš na voljo okusne ideje, da pripraviš nekaj drugačnega brez pretiranega razmišljanja.",
      },
      {
        number: "02",
        title: "Pripravi domače recepte, polne okusa",
        body: "Sledi enostavnim kombinacijam z mesom, piščancem, siri, omakami in dodatki, da ustvariš sočne burgerje s tistim posebnim domačim pridihom.",
      },
      {
        number: "03",
        title: "Uživaj v hrani, ki povezuje vse za mizo",
        body: "Postrezi neustavljive burgerje in spremeni vsak obrok v odličen trenutek, ki ga lahko deliš s svojo družino ali prijatelji.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Takojšen dostop" },
      { icon: "mail", text: "Prejmeš na e-mail" },
      { icon: "card", text: "Varno plačilo" },
    ],
  },

  benefits: {
    eyebrow: "Več okusa, manj truda",
    headline: {
      pre: "Kaj se spremeni, ko imaš v rokah",
      accent: "101 idejo",
      post: "za pripravo burgerjev doma",
    },
    subheadline:
      "Nehaj improvizirati z enimi in istimi sestavinami ter vsak obrok raje spremeni v nekaj domačega, okusnega in preprostega za druženje.",
    items: [
      {
        title: "Nikoli več ne ostaneš brez idej",
        body: "Vedno boš imel na voljo drugačen recept, da lahko pripraviš nekaj okusnega povsem brez razmišljanja.",
        icon: "sparkles",
      },
      {
        title: "Bolj posebni obroki",
        body: "Spremeni navadno večerjo v kulinarično doživetje, ki ga boš delil s svojimi najdražjimi.",
        icon: "heart",
      },
      {
        title: "Več okusa brez odhoda v restavracijo",
        body: "Pripravi sočne, domače burgerje v kombinacijah, ki imajo okus naravnost iz prave restavracije.",
        icon: "home",
      },
      {
        title: "Manj kompliciranja",
        body: "Preprosti recepti, povsem vsakdanje sestavine in koraki, ki jim je izjemno enostavno slediti.",
        icon: "zap",
      },
      {
        title: "Možnosti za vsako priložnost",
        body: "Od hitre in preproste večerje do lenobnega vikenda doma ali zabave s prijatelji.",
        icon: "users",
      },
      {
        title: "Konec neprestane želje po dobri hrani",
        body: "Ko ti zadiši nekaj tistega res dobrega, si to lahko preprosto pripraviš sam, brez zanašanja na drago dostavo.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "S to knjigo priprava burgerjev doma preneha biti dolgočasna in postane enostaven način, da",
      accent: "resnično razvajaš vse z nečim noro okusnim.",
    },
  },

  features: {
    eyebrow: "Vse, kar potrebuješ, da popestriš svoje burgerje",
    headline: {
      pre: "101 domačih burgerjev, da vsak obrok spremeniš v nekaj",
      accent: "neustavljivega",
    },
    subheadline:
      "Zelo praktična knjiga receptov za pripravo sočnih, raznolikih in izjemno okusnih burgerjev brez kančka stresa, z možnostmi za različne okuse, trenutke in želje.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "Po tvojem okusu",
        title: "Burgerji za vsako željo",
        body: "Odkrij klasične, kremaste, hrustljave, pikantne, ekstra bogate ali pa nekoliko lažje recepte in vedno izberi točno to, kar ti tisti dan zadiši.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Korak za korakom",
        title: "Jasna in vodena priprava",
        body: "Sledi preprostim navodilom za sestavljanje prav vsakega burgerja, ne da bi moral ugibati količine, prave kombinacije ali vrstni red same priprave.",
      },
      {
        emoji: "🥬",
        eyebrow: "Sestavine",
        title: "Različne sestavine in kombinacije",
        body: "Uporabi in skombiniraj govedino, piščanca, različne sire, slanino, zelenjavo, gobe, avokado, kumarice in dodatke ter tako ustvari povsem nove okuse.",
      },
      {
        emoji: "🔥",
        eyebrow: "Več okusa",
        title: "Omake in tisti posebni detajli",
        body: "Dodaj svojim burgerjem več značaja z domačimi prelivi, kremastimi omakami, BBQ-jem, gorčico, začimbami in majhnimi detajli, ki dejansko naredijo razliko.",
      },
      {
        emoji: "🏡",
        eyebrow: "Za druženje",
        title: "Ideje za piknike in vikende",
        body: "Pripravi burgerje, ki so popolni za deljenje z družino, za gostitev prijateljev ali preprosto za tisto malce bolj posebno domače nedeljsko kosilo.",
      },
      {
        emoji: "🚚",
        eyebrow: "Brez dostave",
        title: "Uživaj v okusu brez čakanja",
        body: "Poteši tisto pravo lakoto doma z recepti, ki so bogati, povsem domači in te nasitijo precej bolj kot pa tista na hitro naročena dostava.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Takojšen dostop" },
      { icon: "mail", text: "Prejmeš na e-mail" },
      { icon: "card", text: "Varno plačilo" },
    ],
  },

  carouselSection: {
    eyebrow: "Preprosti recepti za domače užitke",
    headline: {
      pre: "Okusni domači burgerji v",
      accent: "enostavnih in praktičnih različicah",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Sočen domač burger, postrežen na deski" },
      { src: "/carousel/slide-2.webp", alt: "Burger s slanino in topljenim sirom" },
      { src: "/carousel/slide-3.webp", alt: "Raznolikost domačih burgerjev" },
      { src: "/carousel/slide-4.webp", alt: "Proces priprave slastnega burgerja" },
    ],
    chips: [
      "HITRA PRIPRAVA",
      "DOSTOPNE SESTAVINE",
      "DOMAČ OKUS",
      "IDEALNO ZA DRUŽENJE",
    ],
    forYouTitle: "„101 domačih burgerjev“ je zate, če:",
    forYou: [
      {
        title: "Želiš skuhati nekaj zares okusnega brez kompliciranja:",
        body: "recepti, ki jim je preprosto slediti in so ustvarjeni tako, da pripraviš vrhunske burgerje brez večurnega stanja v kuhinji.",
      },
      {
        title: "Iščeš hitre ideje za vrhunski obrok doma:",
        body: "praktične opcije za dni, ko ti zadiši nekaj res dobrega, a se ti preprosto ne da preveč razmišljati, kaj točno bi skuhal.",
      },
      {
        title: "Rad kulinarično razvajaš svojo družino ali prijatelje:",
        body: "sočni, domači in noro okusni burgerji za deljenje ob večerjah, ob vikendih ali pa na večjih druženjih.",
      },
      {
        title: "Želiš več raznolikosti brez zapletenih receptov:",
        body: "kombinacije z mesom, piščancem, siri, vrhunskimi omakami, zelenjavo in dodatki, da res ne boste jedli vedno enega in istega.",
      },
      {
        title: "Imaš raje pravi domač okus kot drago dostavo:",
        body: "pripravi si bogate, praktične in veliko bolj nasitne burgerje kar v udobju doma, kadarkoli ti zadišijo.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Takojšen dostop" },
      { icon: "mail", text: "Prejmeš na e-mail" },
      { icon: "card", text: "Varno plačilo" },
    ],
    a11yPrev: "Prejšnji recept",
    a11yNext: "Naslednji recept",
    a11yDot: "Pojdi na recept",
  },

  bonuses: {
    eyebrow: "Vključeni časovno omejeni bonusi",
    headline: {
      pre: "Če kupiš knjigo",
      accent: "101 Domačih Burgerjev",
      post: ", prejmeš še ta brezplačna darila",
    },
    intro:
      "Dopolni svoje burgerje s praktičnimi vodiči za pripravo domačih omak in prelivov, ki gladko dvignejo vsak recept na povsem novo raven.",
    items: [
      {
        badge: "🎁 BONUS 1",
        title: "Vodič za domače omake",
        body: "Preprosti recepti za pripravo kremastih, BBQ, pikantnih in ostalih okusnih omak, s katerimi tvoji burgerji postanejo še tisočkrat boljši.",
        priceLabel: "Posebna vrednost:",
        priceValue: "Vključeno brezplačno",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Vodič za domače omake",
      },
      {
        badge: "🎁 BONUS 2",
        title: "Vodič za domače prelive",
        body: "Nauči se pripraviti praktične in hitre prelive, ki so popolni za burgerje, pomfri, solate in najrazličnejše domače jedi.",
        priceLabel: "Posebna vrednost:",
        priceValue: "Vključeno brezplačno",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Vodič za domače prelive",
      },
    ],
    outro: {
      pre: "S temi bonusi boš svojim burgerjem dodal tisti piko na i in poseben okus, s katerim se navaden recept prelevi v",
      accent: "nekaj zares posebnega in nepozabnega.",
    },
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Takojšen dostop" },
      { icon: "mail", text: "Prejmeš na e-mail" },
      { icon: "card", text: "Varno plačilo" },
    ],
  },

  recap: {
    eyebrow: "Vse je vključeno z enim samim dostopom",
    headline: {
      pre: "Kaj vse prejmeš, da začneš takoj pripravljati",
      accent: "neustavljive domače burgerje",
    },
    subheadline:
      "Glavna knjiga receptov ter dodatni vodiči, s katerimi boš svoje burgerje izpopolnil do potankosti z okusnimi omakami, prelivi in kombinacijami.",
    paragraph: "Danes ti res ni treba preveč razmišljati, da bi začel",
    body: "Prejel boš popoln dostop do praktične zbirke receptov in norih idej za pripravo sočnih, domačih in enostavnih burgerjev, skupaj z dodatnimi priročniki, ki vsakemu obroku vdahnejo še več tistega pravega okusa.",
    highlight:
      "✨ Vključuje glavno knjigo receptov ter posebne bonuse za izboljšanje tvojih kulinaričnih mojstrovin",
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Takojšen dostop" },
      { icon: "mail", text: "Prejmeš na e-mail" },
      { icon: "card", text: "Varno plačilo" },
    ],
  },

  testimonials: {
    eyebrow: "Mnenja ljudi, ki z veseljem kuhajo doma",
    headline: {
      pre: "Poglej, kaj o tem pravijo tisti, ki že uživajo v prikuhanju",
      accent: "okusnih domačih burgerjev",
    },
    subheadline:
      "Resnične zgodbe ljudi, ki so preprosto želeli več idej, več okusa in bolj posebne obroke, ne da bi se morali vedno zanašati izključno na dostavo.",
    items: [
      {
        name: "Maja L.",
        role: "Kuha za svojo družino",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Zadeva mi je zelo všeč, predvsem zato, ker zdaj res ne delam več vsakič istega burgerja. Imam ogromno idej, kako jih doma narediti drugačne in tisočkrat okusnejše.",
      },
      {
        name: "Andraž P.",
        role: "Idealno za vikende",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "Kombinacije teh omak in dodatkov so res vrhunske. Moji burgerji imajo zdaj okus, kot bi prišli iz top restavracije, pa čeprav jih vedno pripravim v svoji kuhinji.",
      },
      {
        name: "Klara R.",
        role: "Več okusa, manj dostave",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Kupila sem, ker sem iskreno želela nehati tako pogosto naročati tisto hitro hrano. Zdaj, ko si doma zaželimo kaj takega, si burgerje preprosto in hitro naredimo kar sami.",
      },
      {
        name: "Jure M.",
        role: "Preprosti in zelo praktični recepti",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "Tem receptom je super enostavno slediti. Sploh ti ni treba biti nek strokovnjak, samo izbereš pravo idejo in v hipu imaš nekaj res okusnega za pod zob.",
      },
      {
        name: "Sara G.",
        role: "Popolno za druženja",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Najbolj mi je všeč, da so notri opcije res za prav vsak okus. Zadnjič smo s prijatelji imeli pravi večer burgerjev in čisto vsi so hoteli poskusiti še enega.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Takojšen dostop" },
      { icon: "mail", text: "Prejmeš na e-mail" },
      { icon: "card", text: "Varno plačilo" },
    ],
    starsAlt: "5 od 5 zvezdic",
  },

  finalCta: {
    eyebrow: "🔥 Posebna časovno omejena ponudba",
    headline: {
      pre: "Vzemi",
      accent: "101 Domačih Burgerjev",
      post: "z vključenimi bonusi",
    },
    subheadline:
      "Doma pripravljaj tiste prave sočne, preproste in neverjetno okusne burgerje s pomočjo praktičnih receptov za večerje, vikende, druženja in tisto nenadno večerno lakoto.",
    badge: "🎁 Vključuje knjigo receptov + vsa darila in bonuse",
    productName: {
      pre: "101 Domačih",
      accent: "Burgerjev",
    },
    productTagline:
      "Preprosti, izjemno okusni in nadvse praktični recepti za pripravo pravih burgerjev z domačim okusom iz restavracije.",
    bullets: [
      "Glavna knjiga s 101 idejo za slastne domače burgerje",
      "Klasični, kremasti, hrustljavi, pikantni in bogati recepti",
      "Možnosti z govedino, piščancem, siri, slanino, zelenjavo in vsemi dodatki",
      "Jasna navodila za kuhanje korak za korakom brez kakršnega koli kompliciranja",
      "Bonus 1: Vodič za popolne domače omake",
      "Bonus 2: Vodič za izjemne domače prelive",
      "Hitre ideje za večerje, sproščene vikende in druženja s prijatelji",
      "Popolnoma takojšen dostop do digitalne knjige",
    ],
    closing: {
      pre: "Naravnost idealno, če želiš jesti zares okusno brez zanašanja na dostavo:",
      body: "imel boš tiste prave praktične ideje za pripravo sočnih burgerjev doma, ki jih boš z veseljem delil z družino ali prijatelji.",
    },
    priceOldLabel: "Prej:",
    priceOld: "29.90 €",
    priceNote: "Ponudba velja samo še danes",
    priceNow: "9.90",
    priceCurrency: "€",
    priceFooter: "Takojšen digitalni dostop do glavnega produkta in vseh vključenih bonusov.",
    urgency: "Zadnji kosi po tej posebni ceni",
    discountPct: "67%",
    discountLabel: "POPUST",
    button: "DA, ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Varno plačilo" },
      { icon: "mail", text: "Dostop preko e-maila" },
      { icon: "zap", text: "Takojšnja dostava" },
    ],
    imageAlt: "Komplet 101 Domačih Burgerjev z vsemi vključenimi bonusi",
  },

  faq: {
    eyebrow: "Pogosta vprašanja in odgovori",
    headline: {
      pre: "Odgovarjamo na tvoja vprašanja, preden zares začneš z",
      accent: "domačimi burgerji",
    },
    subheadline:
      "Tukaj so zbrani najpogostejši odgovori glede same knjige receptov, bonusov ter dostopa do samega produkta.",
    items: [
      {
        q: "Kako natančno bom prejel vse te recepte?",
        a: "Takoj ko uspešno zaključiš s plačilom, boš na e-mail, ki si ga vpisal ob nakupu, prejel digitalni dostop do vseh receptov.",
      },
      {
        q: "Ali jih lahko prebiram kar na svojem telefonu?",
        a: "Seveda. Do vsega lahko dostopaš preko telefona, tablice ali računalnika. Za odprtje vseh gradiv potrebuješ zgolj internetno povezavo.",
      },
      {
        q: "Moram biti izkušen kuhar ali mojster žara?",
        a: "Nikakor ne. Recepti so ustvarjeni z mislijo na to, da so maksimalno preprosti, praktični in jasni, tudi če nimaš prav nobenih izkušenj v kuhinji.",
      },
      {
        q: "Kaj točno vse sploh vključuje moj nakup?",
        a: "Vključuje glavno digitalno knjigo »101 Domačih Burgerjev« ter tista dva posebna bonusa – vodiča za domače omake in prelive.",
      },
      {
        q: "Ali so ti recepti zelo zapleteni za pripravo?",
        a: "Ne. Glavna ideja vsega skupaj je ravno v tem, da lahko doma pripraviš naravnost neverjetne burgerje brez kakršnihkoli težkih postopkov ali pa sestavin, ki jih je pri nas nemogoče najti.",
      },
      {
        q: "Kdaj natanko lahko začnem z vsem skupaj?",
        a: "Začneš lahko dobesedno takoj, ko dobiš dostop. Preprosto izbereš svoj najljubši recept in slediš korakom.",
      },
    ],
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    trust: [
      { icon: "lock", text: "Varno plačilo" },
      { icon: "mail", text: "Takojšen dostop" },
      { icon: "burger", text: "Vključeni bonusi" },
    ],
  },

  closing: {
    eyebrow: "Začni v svoji kuhinji že danes",
    headline: {
      pre: "Pripravi svoje prve",
      accent: "domače burgerje",
      post: "še ta teden",
    },
    paragraph:
      "Vzemi svojo knjigo receptov, izberi svoj popoln prvi burger in spremeni čisto vsak obrok v odličen trenutek, vreden deljenja z najbližjimi.",
    cta: "ŽELIM SVOJIH 101 BURGERJEV",
    whatsapp: "Piši nam na WhatsApp",
    imageAlt: "Domač burger, pripravljen, da ga poješ",
  },

  footer: {
    brand: "Crearis",
    tagline: "Digitalna knjiga receptov za domače burgerje",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Vse pravice pridržane.",
    disclaimer:
      "To spletno mesto ni na noben način povezano, pridruženo, odobreno ali kakorkoli sponzorirano s strani Facebooka, niti ni bilo kako drugače preverjeno s strani podjetja Facebook. Facebook je registrirana blagovna znamka družbe Meta Platforms, Inc.",
  },
};