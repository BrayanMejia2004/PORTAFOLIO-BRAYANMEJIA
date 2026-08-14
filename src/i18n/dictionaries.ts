export const languages = {
	es: 'ES',
	en: 'EN',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

export const ui = {
	es: {
		'meta.title': 'Brayan Mejia — UX/UI Designer',
		'meta.description': 'Diseño de experiencias digitales con precisión, claridad y empatía.',

		'nav.proyectos': 'Proyectos',
		'nav.sobreMi': 'Sobre Mi',
		'nav.proceso': 'Proceso',
		'nav.contactame': 'Contáctame',
		'nav.lang': 'Cambiar idioma',

		'hero.hola': 'Hola, soy',
		'hero.disponible': 'Disponible',
		'hero.tagline':
			'“ Diseño de experiencias digitales con precisión, claridad y empatía. ”',
		'hero.verProyectos': 'Ver Proyectos',
		'hero.descargarCV': 'Descargar CV',
		'hero.rol': 'UX/UI Designer',
		'hero.badges': 'Prototipos,Website Design,Design System,Figma,Mobile App Design',
		'hero.badge.uxUi': 'UX/UI Designer',
		'hero.badge.prototipos': 'Prototipos',
		'hero.badge.website': 'Website Design',
		'hero.badge.designSystem': 'Design System',
		'hero.badge.figma': 'Figma',
		'hero.badge.mobileApp': 'Mobile App Design',

		'proyectos.titulo': 'Proyectos',
		'proyectos.subtitulo': 'Una muestra de cómo abordo problemas reales de diseño',
		'proyectos.verProyecto': 'Ver Proyecto',
		'proyectos.1.titulo': 'Biblioteca Libre',
		'proyectos.1.descripcion':
			'Plataforma para democratizar el acceso a la lectura - proyecto de grado.',
		'proyectos.1.tags': 'App Móvil,Educación,Proyecto académico',
		'proyectos.2.titulo': 'App Wagly',
		'proyectos.2.descripcion':
			'App para que dueños de mascotas nunca olviden una vacuna.',
		'proyectos.2.tags': 'App Web,Salud Animal,UX Research',
		'proyectos.3.titulo': 'Yamaha XTZ150',
		'proyectos.3.descripcion':
			'Landing page enfocada en conversión para motociclistas.',
		'proyectos.3.tags': 'Landing Page,E-commerce',

		'sobreMi.titulo': 'Sobre Mi',
		'sobreMi.parrafo':
			'Mi camino comenzó en las Unidades Tecnológicas de Santander, cursando la carrera de Tecnología en Desarrollo de Sistemas Informáticos, continuando con la Ingeniería en Sistemas. Fue en ese camino donde conocí el diseño UX/UI, y desde entonces es lo que más me apasiona hacer. Hoy sigo formándome por mi cuenta, cada vez con más práctica y experiencia.',
		'sobreMi.cita':
			'“ Creo en investigar antes de diseñar, en simplificar sin perder personalidad, y en que cada pantalla debe resolver un problema real, no solo verse bien. ”',
		'sobreMi.cta': '¿Trabajamos Juntos?',
		'sobreMi.educacion': 'Mi Educación',
		'sobreMi.ed1.titulo': 'Ingeniería en Sistemas',
		'sobreMi.ed1.institucion': 'Unidades Tecnológicas de Santander (2024 - 2026)',
		'sobreMi.ed2.titulo': 'Tecnólogo en Desarrollo de Sistemas Informáticos',
		'sobreMi.ed2.institucion': 'Unidades Tecnológicas de Santander (2021 - 2024)',
		'sobreMi.ed3.titulo': 'Técnico en Sistemas',
		'sobreMi.ed3.institucion': 'Servicio Nacional de Aprendizaje SENA (2019 - 2020)',
		'sobreMi.ed4.titulo': 'Bachiller Técnico con Especialidad en Sistemas',
		'sobreMi.ed4.institucion': 'Colegio Técnico Industrial José Elías Puyana (2015-2020)',

		'proceso.titulo': 'Proceso de Diseño',
		'proceso.step1.titulo': 'Investigar',
		'proceso.step1.descripcion':
			'Entiendo el problema antes de tocar Figma: quién es el usuario, qué necesita, qué falla hoy.',
		'proceso.step2.titulo': 'Definir',
		'proceso.step2.descripcion':
			'Organizo la información, user flows, arquitectura, wireframes de baja fidelidad, antes de pensar en visual.',
		'proceso.step3.titulo': 'Diseñar',
		'proceso.step3.descripcion':
			'Wireframes de alta fidelidad, prototipos interactivos, aplicando un sistema de diseño consistente.',
		'proceso.step4.titulo': 'Validar',
		'proceso.step4.descripcion':
			'Pruebo el diseño, recibo feedback y ajustes, el diseño nunca es la primera versión.',

		'contacto.titulo': '¿Trabajamos Juntos?',
		'contacto.subtitulo':
			'¿Tienes un proyecto en mente o una vacante que encaje conmigo? Escríbeme.',
		'contacto.campoNombre': 'Tu Nombre *',
		'contacto.placeholderNombre': 'Eje. Juan Perez',
		'contacto.campoCorreo': 'Correo Electrónico *',
		'contacto.placeholderCorreo': 'Ejemplo@gmail.com',
		'contacto.campoCelular': 'Celular *',
		'contacto.placeholderCelular': '302 000 0000',
		'contacto.campoCiudad': 'Ciudad *',
		'contacto.placeholderCiudad': 'Ingrese Tu Ciudad',
		'contacto.campoMensaje': 'Mensaje *',
		'contacto.placeholderMensaje': 'Ingresa tu mensaje..',
		'contacto.enviar': 'Enviar Mensaje',

		'footer.tagline': '“ Diseño de experiencias digitales con precisión, claridad y empatía. ”',
		'footer.navegacion': 'Navegación',
		'footer.inicio': 'Inicio',
		'footer.proyectos': 'Proyectos',
		'footer.sobreMi': 'Sobre Mi',
		'footer.proceso': 'Proceso',
		'footer.contacto': 'Contacto',
		'footer.telefono': '+57 3024550409',
		'footer.email': 'brayanymortega@gmail.com',
		'footer.ciudad': 'Bucaramanga, Colombia',
		'footer.copyright': 'Copyright 2026 - Brayan Mejia. Todos Los Derechos Reservados',
	},
	en: {
		'meta.title': 'Brayan Mejia — UX/UI Designer',
		'meta.description': 'I design digital experiences with precision, clarity, and empathy.',

		'nav.proyectos': 'Projects',
		'nav.sobreMi': 'About Me',
		'nav.proceso': 'Process',
		'nav.contactame': 'CONTACT ME',
		'nav.lang': 'Change language',

		'hero.hola': "Hello, I'm",
		'hero.disponible': 'Available',
		'hero.tagline': '“ I design digital experiences with precision, clarity, and empathy. ”',
		'hero.verProyectos': 'View Projects',
		'hero.descargarCV': 'Download CV',
		'hero.rol': 'UX/UI Designer',
		'hero.badges': 'Prototyping,Website Design,Design System,Figma,Mobile App Design',
		'hero.badge.uxUi': 'UX/UI Designer',
		'hero.badge.prototipos': 'Prototyping',
		'hero.badge.website': 'Website Design',
		'hero.badge.designSystem': 'Design System',
		'hero.badge.figma': 'Figma',
		'hero.badge.mobileApp': 'Mobile App Design',

		'proyectos.titulo': 'Projects',
		'proyectos.subtitulo': 'A sample of how I approach real design problems',
		'proyectos.verProyecto': 'View Project',
		'proyectos.1.titulo': 'Biblioteca Libre',
		'proyectos.1.descripcion':
			'Platform to democratize access to reading - final year project.',
		'proyectos.1.tags': 'Mobile App,Education,Academic project',
		'proyectos.2.titulo': 'Wagly App',
		'proyectos.2.descripcion':
			'App so pet owners never forget a vaccine.',
		'proyectos.2.tags': 'Web App,Animal Health,UX Research',
		'proyectos.3.titulo': 'Yamaha XTZ150',
		'proyectos.3.descripcion':
			'Landing page focused on conversion for motorcyclists.',
		'proyectos.3.tags': 'Landing Page,E-commerce',

		'sobreMi.titulo': 'About Me',
		'sobreMi.parrafo':
			'My journey began at the Unidades Tecnológicas de Santander, studying Systems Development Technology, continued with Systems Engineering. Along the way I discovered UX/UI design, and since then it is what I am most passionate about. Today I keep learning on my own, gaining more practice and experience every day.',
		'sobreMi.cita':
			'“ I believe in researching before designing, in simplifying without losing personality, and that every screen should solve a real problem, not just look good. ”',
		'sobreMi.cta': 'Shall we work together?',
		'sobreMi.educacion': 'My Education',
		'sobreMi.ed1.titulo': 'Systems Engineering',
		'sobreMi.ed1.institucion': 'Unidades Tecnológicas de Santander (2024 - 2026)',
		'sobreMi.ed2.titulo': 'Technologist in Systems Development',
		'sobreMi.ed2.institucion': 'Unidades Tecnológicas de Santander (2021 - 2024)',
		'sobreMi.ed3.titulo': 'Systems Technician',
		'sobreMi.ed3.institucion': 'Servicio Nacional de Aprendizaje SENA (2019 - 2020)',
		'sobreMi.ed4.titulo': 'Technical High School Degree in Systems',
		'sobreMi.ed4.institucion': 'Colegio Técnico Industrial José Elías Puyana (2015-2020)',

		'proceso.titulo': 'Design Process',
		'proceso.step1.titulo': 'Research',
		'proceso.step1.descripcion':
			'I understand the problem before opening Figma: who the user is, what they need, what is failing today.',
		'proceso.step2.titulo': 'Define',
		'proceso.step2.descripcion':
			'I organize the information, user flows, architecture, low-fidelity wireframes, before thinking about visuals.',
		'proceso.step3.titulo': 'Design',
		'proceso.step3.descripcion':
			'High-fidelity wireframes, interactive prototypes, applying a consistent design system.',
		'proceso.step4.titulo': 'Validate',
		'proceso.step4.descripcion':
			'I test the design, receive feedback and iterate — the design is never the first version.',

		'contacto.titulo': 'Shall we work together?',
		'contacto.subtitulo':
			'Do you have a project in mind or a job opening that fits me? Write to me.',
		'contacto.campoNombre': 'Your Name *',
		'contacto.placeholderNombre': 'e.g. John Doe',
		'contacto.campoCorreo': 'Email *',
		'contacto.placeholderCorreo': 'example@gmail.com',
		'contacto.campoCelular': 'Phone *',
		'contacto.placeholderCelular': '302 000 0000',
		'contacto.campoCiudad': 'City *',
		'contacto.placeholderCiudad': 'Enter your city',
		'contacto.campoMensaje': 'Message *',
		'contacto.placeholderMensaje': 'Enter your message..',
		'contacto.enviar': 'Send Message',

		'footer.tagline': '“ I design digital experiences with precision, clarity, and empathy. ”',
		'footer.navegacion': 'Navigation',
		'footer.inicio': 'Home',
		'footer.proyectos': 'Projects',
		'footer.sobreMi': 'About Me',
		'footer.proceso': 'Process',
		'footer.contacto': 'Contact',
		'footer.telefono': '+57 3024550409',
		'footer.email': 'brayanymortega@gmail.com',
		'footer.ciudad': 'Bucaramanga, Colombia',
		'footer.copyright': 'Copyright 2026 - Brayan Mejia. All Rights Reserved',
	},
} as const;

export type TranslationKey = keyof (typeof ui)['es'];

export function getLang(url: URL): Language {
	const [, lang] = url.pathname.split('/');
	if (lang in languages) return lang as Language;
	return defaultLang;
}

export function getTranslation(key: TranslationKey, lang: Language): string {
	return ui[lang][key] ?? ui[defaultLang][key];
}
