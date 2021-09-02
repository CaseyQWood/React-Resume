import bucketUp from '../images/portfolio-img/login-facemesh.gif'
import bucketUpBudget from '../images/portfolio-img/bucket-animation-budget.gif'
import scheduler from '../images/portfolio-img/schedulerPrev.png'
import scheduler2 from '../images/portfolio-img/create_appointment_true.jpg'
import galaxy from '../images/portfolio-img/galaxy-three.gif'
import helmet from '../images/portfolio-img/flight-helmet-three.gif'
import toDoEdit from '../images/portfolio-img/edit_category.gif'
import toDoCreate from '../images/portfolio-img/new_task.gif'

const portfolioScripts = [
  {
    name: 'BucketUp',
    description: 'Stylized budgeting app allowing users to create, manage and share their personal budgets created using the app.',
    stack: ['React', 'threeJS', 'JavaScript', 'PSQL', 'Express', 'CannonJS', 'Material UI', 'SCSS', 'React Charts'],
    image: [bucketUp, bucketUpBudget]
  },
  {
    name: 'Scheduler',
    description: 'Scheduler app that allows the users to choose any day from Monday to Friday and book an appointment with a available interviewer for that day. Includes testing suites',
    stack: ['React', 'JavaScript', 'Express', 'HTML/CSS', 'Cypress', 'jest'],
    image: [scheduler, scheduler2]
  },
  {
    name: 'Three.js Journey',
    description: 'An extensive course covering various compenents of 3d design/creation using WbGL and the Three.JS library. Created by Bruno Simon a french creative developer specialized in WebGL with a history of teaching WebGl in various schools for more then 7 years',
    stack: ['JavaScript', 'threeJS', 'CannonJS', 'WebGL', 'TypeScript', 'HTML/CSS'],
    image: [galaxy, helmet]
  },
  {
    name: 'Smart To-Do',
    description: 'A smart categorizing to-do list where users input activities that get sorted into correct sections using redementary machine learning to update logic for correct catigorization.',
    stack: ['Jquery', 'JavaScript', 'Sass', 'Express'],
    image: [toDoCreate, toDoEdit]
  }

]

export default portfolioScripts;
