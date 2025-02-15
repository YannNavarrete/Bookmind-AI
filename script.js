{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 console.log("BookMind-AI est pr\'eat !");\
}
document.addEventListener("DOMContentLoaded", function () {
    const books = {
        fantasy: ["Le Seigneur des Anneaux", "Harry Potter", "L'Assassin Royal"],
        sciencefiction: ["Dune", "Fondation", "Neuromancien"],
        thriller: ["La Fille du Train", "Gone Girl", "Le Silence des Agneaux"],
        romance: ["Orgueil et Préjugés", "Me Before You", "Outlander"]
    };

    document.getElementById("recommendButton").addEventListener("click", function () {
        const genre = document.getElementById("genreInput").value.toLowerCase();
        const result = document.getElementById("result");

        if (books[genre]) {
            const randomBook = books[genre][Math.floor(Math.random() * books[genre].length)];
            result.textContent = `Nous vous recommandons : ${randomBook}`;
        } else {
            result.textContent = "Désolé, ce genre n'est pas disponible.";
        }
    });
});
