import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@acme/ui/accordion";

interface FAQProps {
	question: string;
	answer: string;
	value: string;
}

const FAQList: FAQProps[] = [
	{
		question: "¿Dónde se encuentran ubicadas las iglesias?",
		answer:
			"Actualmente tenemos iglesias en las ciudades de Bogotá, Cali, Garagoa y Santa Marta.",
		value: "item-1",
	},
	{
		question: "¿Cómo puedo ver los servicios en línea?",
		answer:
			"Cada domingo a las 10:00 AM hora Colombia, transmitimos en vivo desde nuestra cuenta de Facebook.",
		value: "item-2",
	},
	{
		question: "¿Ofrecen programas para niños y jóvenes?",
		answer:
			"Sí, contamos con programas para niños y jóvenes cada domingo a las 10:00 AM.",
		value: "item-3",
	},
	{
		question: "¿Cómo puedo hacer una donación o diezmo?",
		answer:
			"Para hacer una donación o diezmo, puedes hacerlo a través de nuestra página web o en la iglesia más cercana.",
		value: "item-4",
	},
	{
		question: "¿Necesito registrarme para asistir a un servicio?",
		answer:
			"No es necesario registrarse, pero te recomendamos llegar temprano para asegurar un buen lugar.",
		value: "item-5",
	},
];

export default function FAQ() {
	return (
		<section id="faq" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold mb-4">
				Preguntas Frecuentes{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					FAQ
				</span>
			</h2>

			<Accordion type="single" collapsible className="w-full AccordionRoot">
				{FAQList.map(({ question, answer, value }: FAQProps) => (
					<AccordionItem key={value} value={value}>
						<AccordionTrigger className="text-left">
							{question}
						</AccordionTrigger>
						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<h3 className="font-medium mt-4">
				Tienes mas preguntas?
				<a
					rel="noreferrer noopener"
					href="#contact"
					className="text-primary transition-all border-primary hover:border-b-2"
				>
					{" "}
					Contáctanos
				</a>
			</h3>
		</section>
	);
}
