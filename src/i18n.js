import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    GB: {
        translation: {
            or: 'or',
            Education: "Education",
            EducationDescription: "Since high school, my education is related to Information Technology. I learned a lot diffrent paths for this topic, but mostly I was always leaning towards programming,which allowed me to have closer look into programming languages more than my favourite Javascript's path.",
            MasterIT: "Master of IT",
            EngineereIT: "IT Engineer",
            HighSchoolIT: "IT major in high School",
            Basic: "Basic",
            BasicDescription: "Basic education",
            Projects: "Projects",
            ProjectsDescription: "Since 2015 I was building a lot of projects,mostly on same technology: jQuery, PHP, MySQL & Wordpress, which allowed me to create everything what I needed, but when the time to defend title Engineer came,at the end of my Bachelors studies I decided to create the biggest project in my life - Juicify (exactly Juicify 1.0), which was too complicated for my small technology pool. After year of learning and coding, Juicify 1.0 got 500 users and deserved new version, used once again as best option to learn new technology.",
            ProjectsDescription2: "So let's talk about what Juicify uses...",
            Technology: "Technology",
            Description: "Description",
            NerdInformations: "What am I proud of:",
            LiveVersion: "Live version",
            LiveVersionPassword: "Live version password",
            Source: "Source",
            mainH1: "Hi, I'm Kamil Owczarek.",
            HomeBoxDescription: "Year Old, Software Engineer, practicing a minimalistic style & doing magical things to make internet a better place. View my",
            HomeBoxDescription2: "You can reach me via social media or send an email at KamilOw97@gmail.com.",
            Contact: "Contact",
            Now: "Now",
            Juicify1Status: "Project ended,reaching a satisfying level, getting 500+ users, but due to of my goal of mastering React, I decided to stop working on this code and to rewrite whole application.",
            Juicify1Description: "Juicify is a Progressive Web Application, which is a coach in your pocket. It allows all functions like popular fitness application (for example MyFitnessPal), but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and help him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.",
            Juicify1NerfInformations: `The technology probably are not new for you, but the biggest flex of the app is the way it handles offline synchronization. iOS does not support PWA background synchronization, but thanks to socket, we can kind of avoid the issue. MongoDB as main database allow fast writing to DB, which is the most important part of "native experience". When user is forced to search in DB, Juicify supports it with cache methods like indexedDB and Redis, reusing previous queries's results from all users.`,
            Juicify2Status: "Live tests.",
            Juicify2Description: "Juicify is a Progressive Web Application, which is a coach in your pocket. It allows all functions like popular fitness application (for example MyFitnessPal), but also provides an opportunity of tracking workouts, watching other's people progress and the way they train. The main point of the app is analyzing user's way of eatting and help him achieving body goals in the fastest and the most sience way. Not enough? It almost fully works in offline mode.",
            Juicify2NerfInformations: `The biggest flex of the app is the way of handling offline synchronization. iOS does not support PWA background synchronization, but thanks to socket and Web workers, we can kind of avoid the issue, but delegating synchornization to work in background, when user uses the app. MongoDB as main database allow fast writing to DB, which is the most important part of "native experience". When user search in DB, Juicify supports it with cache methods like indexedDB and Redis, reusing previous queries's results.`
        }
    },
    PL: {
        translation: {
            or: 'lub',
            Education: "Edukacja",
            EducationDescription: "Od szko??y ??redniej moja edukacja jest powi??zana stricte z Informatyk??. Pozwoli??o mi to na poznanie wielu r????nych dziedzin tego zagadnienia i umocnienie przekonania, ??e to w??a??nie programowanie jest dla mnie. Przez okres kszta??cenia spr??bowa??em wielu j??zyk??w programowania, ale to Javascript Engineer jest profilem, kt??ry najbardziej mi odpowiada.",
            MasterIT: "Magister IT",
            EngineereIT: "In??ynier IT",
            HighSchoolIT: "Technikum IT",
            Basic: "Podstawowe",
            BasicDescription: "Podstawowe wykszta??cenie",
            Projects: "Projekty",
            ProjectsDescription: "Od 2015 roku zbudowa??em wiele projekt??w, kt??re opiera??y si?? o t?? same technologie: jQuery, PHP, mySQL & Wordpress, kt??re praktycznie pozwala??y mi na stworzenie wszystkiego, co potrzebowa??em. Kiedy przyszed?? czas obrony in??yniera, zdecydowa??em si?? na zbudowanie najwi??kszego projektu w moim ??yciu - Juicify (dok??adniej Juicify 1.0), kt??ry by?? zbyt skomplikowany dla obecnie posiadanych technologii. Po roku nauki oraz kodowania, Juicify 1.0 zdoby??o 500+ u??ytkownik??w i zas??u??y??o na now?? wersj??, ponownie wykorzystan?? jako najlepszy spos??b na nauk?? nowych technologii.",
            ProjectsDescription2: "Wi??c porozmawiajmy o tym, co Juicify wykorzystuje...",
            Technology: "Technologie",
            Description: "Opis",
            NerdInformations: "Informacj?? dla nerd??w",
            LiveVersion: "Wersja na ??ywo",
            LiveVersionPassword: "Has??o do wersji na ??ywo",
            Source: "Kod",
            mainH1: "Cze????, jestem Kamil.",
            HomeBoxDescription: "lat, Software Engineer, praktykuje minimalizm & sprawiam, ??e internet jest lepszym miejscem. Sprawd??",
            HomeBoxDescription2: "Mo??esz si?? ze mn?? skontaktowa?? za pomoc?? social medi??w lub KamilOw97@gmail.com.",
            Contact: "Kontakt",
            Now: "Teraz",
            Juicify1Status: "Projekt zako??czony. Osi??gn???? sadysakcjonuj??cy sukces, si??gaj??c 500+ u??ytkownik??w. Ze wzgl??du na zmian?? technologii na Reacta, zdecydowa??em si?? nie rozwija?? tego kodu, a przepisa?? ca???? aplikacj??.",
            Juicify1Description: "Juicify to PWA aplikacja, kt??ra jest trenerem personalnym w Twojej kieszeni. Oferuje ona wszystkie funkcj?? jak inne tego typu aplikacje (np. MyFitnessPal) oraz wiele wi??cej. G????wna r????nica to przede wszystkim mo??liwo???? ??ledzenie progresu treningowego, obserwowania rezultat??w innych os??b oraz ich metod treningowych. Najwa??niejsz?? funkcj?? jest mo??liwo???? analizowania sposobu jedzenia u??ytkownika oraz pomagane mu w osi??gni??ciu celu sylwetkowego. Wci???? ma??o? Juicify dzia??a w trybie offline.",
            Juicify1NerfInformations: `Wszystkie wymienione technologie prawdopodobnie nie s?? niczym nowym dla Ciebie, ale to, czym Juicify mo??e si?? pochwali?? to spos??b, w kt??ry radzi sobie z synchronizacj?? po offline. W przypadku natywnych aplikacji mo??na wykorzysta?? synchronizacj?? w tle, ale nie dzia??a to w przypadku PWA, kt??remu iOS blokuje tak?? mo??liwo????. Sposobem na unikni??cie tego problemu jest socket, kt??ry dzi??ki wsparciu Redisa oraz szybkiej bazy danych noSQL, pozwala na przeprowadzenie tego procesu, bez psucia "native experience".`,
            Juicify2Status: "Pyrzogotowanie pod pierwsze testy na ??ywo.",
            Juicify2Description: "Juicify to PWA aplikacja, kt??ra jest trenerem personalnym w Twojej kieszeni. Oferuje ona wszystkie funkcj?? jak inne tego typu aplikacje (np. MyFitnessPal) oraz wiele wi??cej. G????wna r????nica to przede wszystkim mo??liwo???? ??ledzenie progresu treningowego, obserwowania rezultat??w innych os??b oraz ich metod treningowych. Najwa??niejsz?? funkcj?? jest mo??liwo???? analizowania sposobu jedzenia u??ytkownika oraz pomagane mu w osi??gni??ciu celu sylwetkowego. Wci???? ma??o? Juicify dzia??a w trybie offline.",
            Juicify2NerfInformations: `Wszystkie wymienione technologie prawdopodobnie nie s?? niczym nowym dla Ciebie, ale to, czym Juicify mo??e si?? pochwali?? to spos??b, w kt??ry radzi sobie z synchronizacj?? po offline. W przypadku natywnych aplikacji mo??na wykorzysta?? synchronizacj?? w tle, ale nie dzia??a to w przypadku PWA, kt??remu iOS blokuje tak?? mo??liwo????. Sposobem na unikni??cie tego problemu jest socket, kt??ry dzi??ki wsparciu Redisa oraz szybkiej bazy danych noSQL, pozwala na przeprowadzenie tego procesu, bez psucia "native experience".`,
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "GB",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;