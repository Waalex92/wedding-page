"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import { toast } from "sonner";
import { sendEmail } from "@/app/api/send/route";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactFormSchema),
	});

	const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
		const result = await sendEmail(data);

		if (result?.success) {
			console.log({ data: result.data });
			toast.success("Email sent!");
			reset();
			return;
		}

		// toast error
		console.log(result?.error);
		toast.error("Something went wrong!");
	};

	return (
		<form
			onSubmit={handleSubmit(processForm)}
			className="m-4 flex flex-1 flex-col gap-4 ">
			<div>
				<input
					placeholder="Nombre"
					className="w-full rounded-lg border-2 border-blue-300 p-2 text-blue-400 text-xl"
					{...register("name")}
				/>
				{errors.name?.message && (
					<p className="ml-1 mt-1 text-xl text-red-400">
						{errors.name.message}
					</p>
				)}
			</div>

			<div>
				<input
					placeholder="Correo"
					className="w-full rounded-lg border-2 border-blue-300 p-2 text-blue-400 text-xl"
					{...register("email")}
				/>
				{errors.email?.message && (
					<p className="ml-1 mt-1 text-xl text-red-400">
						{errors.email.message}
					</p>
				)}
			</div>

			<div>
				<textarea
					rows={5}
					cols={5}
					placeholder="Mensaje"
					className="w-full rounded-lg p-2 border-2 border-blue-300 text-blue-400 text-xl"
					{...register("message")}
				/>
				{errors.message?.message && (
					<p className="ml-1 text-xl text-red-400">
						{errors.message.message}
					</p>
				)}
			</div>

			<button
				disabled={isSubmitting}
				className="rounded-lg border border-blue-400 bg-sky-100 py-2.5 font-medium text-blue-400 text-4xl transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50 mb-10">
				{isSubmitting ? "Enviando..." : "Enviar"}
			</button>
		</form>
	);
}
