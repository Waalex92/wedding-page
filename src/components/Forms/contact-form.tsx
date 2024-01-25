"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import { toast } from "sonner";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
	name: string;
	email: string;
	message: string;
}

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const {
		register,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactFormSchema),
	});

	// Manejar cambios en los inputs
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Puedes realizar operaciones asíncronas aquí
		// Por ejemplo, enviar los datos a un servidor
		try {
			// Simular una operación asíncrona, por ejemplo, una solicitud HTTP
			await enviarDatosAlServidor(formData);

			console.log("Formulario enviado con éxito");
		} catch (error) {
			console.error("Error al enviar el formulario", error);
		}
	};

	const enviarDatosAlServidor = async (datos: FormData) => {
		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(datos),
			});

			if (!response.ok) {
				throw new Error(
					`Error en la solicitud: ${response.statusText}`
				);
			}

			const result = await response.json();
			return result;
		} catch (error) {
			console.error("Error al enviar la solicitud al servidor", error);
			throw error;
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="m-4 flex flex-1 flex-col gap-4 ">
			<div>
				<input
					placeholder="Nombre"
					className="w-full rounded-lg border-2 border-blue-300 p-2 text-blue-400 text-xl"
					type="text"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<input
					placeholder="Correo"
					className="w-full rounded-lg border-2 border-blue-300 p-2 text-blue-400 text-xl"
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<textarea
					rows={5}
					cols={5}
					placeholder="Mensaje"
					className="w-full rounded-lg p-2 border-2 border-blue-300 text-blue-400 text-xl"
					name="message"
					value={formData.message}
					onChange={handleInputChange}
				/>
			</div>
			<button
				disabled={isSubmitting}
				className="rounded-lg border border-blue-400 bg-sky-100 py-2.5 font-medium text-blue-400 text-4xl transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50 mb-10">
				{isSubmitting ? "Enviando..." : "Enviar"}
			</button>
		</form>
	);
}
