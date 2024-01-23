interface ContactFormEmailProps {
	name: string;
	email: string;
	message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
	name,
	email,
	message,
}) => (
	<div>
		<h1>Mis deseos para los novios!</h1>
		<p>
			De: <strong>{name}</strong> agradece a: {email}
		</p>
		<h2>Mensaje:</h2>
		<p>{message}</p>
	</div>
);

export default ContactFormEmail;
