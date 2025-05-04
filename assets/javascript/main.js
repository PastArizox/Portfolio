import { initHeader } from './modules/header.js';
import { loadSkills } from './modules/skill/index.js';
import { loadProjects } from './modules/project/index.js';
import { loadExperiences } from './modules/experience.js';
import { loadContacts } from './modules/contact.js';

initHeader();
loadSkills();
loadProjects();
loadExperiences();
loadContacts();
