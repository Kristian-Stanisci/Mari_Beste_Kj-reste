window.VALENTINE_CONFIG = {
    // Grunnleggende informasjon
    valentineName: "Mari❤️❤️❤️",                    // Din valentines navn
    pageTitle: "Vil du være min valentine? 💝", // Nettleserfane tittel

    // Flytende bakgrunnselementer
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Hjerte-emojier i bakgrunnen
        bears: ['😻', '🦭']                       // Bjørne-emojier i bakgrunnen
    },

    // Spørsmål og knapper
    questions: {
        first: {
            text: "Liker du meg?",                   // Første spørsmål
            yesBtn: "Ja",                             // Ja-knapp tekst
            noBtn: "Nei",                               // Nei-knapp tekst
            secretAnswer: "Jeg liker deg ikke, jeg elsker deg! ❤️"  // Skjult melding
        },
        second: {
            text: "Hvor mye elsker du meg?",          // Andre spørsmål
            startText: "Så mye!",                   // Tekst før prosentandel
            nextBtn: "Neste ❤️"                         // Neste-knapp tekst
        },
        third: {
            text: "Vil du være min valentine Mari?❤️ Du har egt ikke så my valg, vil bare ha dæ",      // Siste spørsmål
            yesBtn: "Ja!",                            // Ja-knapp tekst
            noBtn: "Nei"                                // Nei-knapp tekst
        }
    },

    // Kjærlighetsmåler meldinger
    loveMessages: {
        extreme: "Oidaaaa. Du elske mæ så myyyyyy?? 🥰🚀💝",  // Vises over 5000%
        high: "Due så god Mari, ord kan ikke beskriv kor takknemmelig æe for dæ",              // Vises over 1000%
        normal: "Og lenger! 🥰"                           // Vises over 100%
    },

    // Slutt-feiring
    celebration: {
        title: " æe er den heldigste gutten i hele verden. ",     // Feiringstittel
        message: "Glede mæ te å ta dæ med ut å spis når vi får tid❤️ Kor vi ska e hemmelig. Du må bare se bra ut, som du alltid gjør",          // Feiringsmelding
        emojis: "🎁💖🤗💝💋❤️💕"                        // Feirings-emojier
    },

    // Nettside farger
    colors: {
        backgroundStart: "#ffafbd",      // Bakgrunns gradient start
        backgroundEnd: "#ffc3a0",        // Bakgrunns gradient slutt
        buttonBackground: "#ff6b6b",     // Knappefarge
        buttonHover: "#ff8787",          // Knapp hover-farge
        textColor: "#ff4757"            // Tekstfarge
    },

    // Animasjonsinnstillinger
    animations: {
        floatDuration: "15s",           // Hvor lenge hjerter flyter (10-20s)
        floatDistance: "50px",          // Sideveis bevegelse (30-70px)
        bounceSpeed: "0.5s",            // Sprett animasjonshastighet (0.3-0.7s)
        heartExplosionSize: 1.5         // Endelig hjerte-eksplosjonsstørrelse (1.2-2.0)
    },

    // Musikkinnstillinger
    music: {
        enabled: true, // Musikkfunksjon er deaktivert - last opp en MP3-fil til Cloudinary og erstatt musicUrl for å aktivere
        autoplay: true, // Prøv å spille automatisk (merk: noen nettlesere kan blokkere dette)
        musicUrl: "", // Last opp en .mp3 fil til Cloudinary og sett URL-en her, f.eks: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/YOUR_FILE.mp3"
        startText: "🎵 Spill musikk", // Knappetekst for å starte musikk
        stopText: "🔇 Stopp musikk", // Knappetekst for å stoppe musikk
        volume: 0.5 // Volumnivå (0.0 til 1.0)
    }
};
