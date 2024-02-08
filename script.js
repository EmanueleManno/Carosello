//VEDO SE FUNZIONA VUE:
console.log("VUE OK", Vue);

//INIZIALIZZO L'APP VUE:
const app = Vue.createApp({
  //CAROSELLO CONTENENTE I DATI DELLE IMMAGINI:
  name: "carousel",
  data() {
    return {
      autoplay: null,
      currentIndex: 0,
      pictures: [
        {
          //PRIMA IMMAGINE:
          url: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          description:
            "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          //SECONDA IMMAGINE:
          url: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          description:
            "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          //TERZA IMMAGINE:
          url: "img/03.webp",
          title: "Fortnite",
          description:
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          //QUARTA IMMAGINE:
          url: "img/04.webp",
          title: "Stray",
          description:
            "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.",
        },
        {
          //QUINTA IMMAGINE:
          url: "img/05.webp",
          title: "Marvel's Avengers",
          description:
            "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },

        {
          //SESTA IMMAGINE:
          url: "img/06.jpg",
          title: "Assassin's Creed Mirage",
          description:
            "Assassin's Creed Mirage is an action-adventure video game developed by Ubisoft Bordeaux and published by Ubisoft.",
        },
        {
          //SETTIMA IMMAGINE:
          url: "img/07.webp",
          title: "Far Cry 6",
          description:
            "Enter the adrenaline-filled world of modern guerrilla warfare. Join the revolution and rebel against the oppressive regime of dictator Antón Castillo and his young son Diego.",
        },
        {
          //OTTAVA IMMAGINE:
          url: "img/08.png",
          title: "Grand Theft Auto VI",
          description:
            "Grand Theft Auto VI is an action-adventure game in development by Rockstar Games. It is expected to be the eighth mainline Grand Theft Auto game, after Grand Theft Auto V, and the sixteenth overall.",
        },
        {
          //NONA IMMAGINE:
          url: "img/09.webp",
          title: "Hogwarts Legacy",
          description:
            "You live at Hogwarts in the 1800s. Your character is a student, whose talent may be the key to an ancient secret that threatens to destroy the wizarding world.",
        },
      ],
    };
  },

  computed: {
    //QUANDO ARRIVO ALL'ULTIMA FOTO:
    ultimaFoto() {
      return this.currentIndex === this.pictures.length - 1;
    },
  },

  methods: {
    //VADO ALLA PROSSIMA FOTO:
    prossimo() {
      if (this.ultimaFoto) this.currentIndex = 0;
      else this.currentIndex++;
    },

    //VADO ALLA FOTO PRECEDENTE:
    precedente() {
      if (this.currentIndex) this.currentIndex--;
      else this.currentIndex = this.pictures.length - 1;
    },

    //IMPOSTARE L'INDICE PER IL THUMBNAIL: (BONUS 1)
    setCurrentIndex(targetIndex) {
      this.currentIndex = targetIndex;
    },

    //FAR FINIRE L'AUTOPLAY:
    stopAutoplay() {
      clearInterval(this.autoplay);
    },

    //FAR PARTIRE L'AUTOPLAY:
    startAutoplay() {
      this.autoplay = setInterval(this.prossimo, 2000);
    },
  },

  //CAMBIO AUTOMATICO DELL'IMMAGINE ALL'AVVIO DELLA PAGINA: (BONUS 2)
  automatico() {
    this.startAutoplay();
  },
});

//LA MONTO NELL'ELEMENTO HTML RADICE:
app.mount("#root");
