### To create the project
npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force

### Node Version
version: v21

### To start the project
npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### Project Description
Explanation:
IPartecipante Interface: Defines the structure for a participant (a migrant). It includes properties like nome, cognome, paeseDiOrigine, etc., and a method iscrivitiCorso to enroll in a course.

ICorso Interface: Defines the structure for a course, including the course title, description, professional sector, and the list of enrolled participants. The method aggiungiPartecipante allows adding a participant to the course.

IAzienda Interface: Represents a partner company that provides internship or job opportunities. The offriPosizione method offers a job position to a specific participant.

Partecipante Class: Implements the IPartecipante interface. It manages participant details and their enrollment in courses.

Corso Class: Implements the ICorso interface. It handles the course details and the management of enrolled participants.

Azienda Class: Implements the IAzienda interface. It manages company information and job offers for participants.