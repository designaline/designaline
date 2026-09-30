"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { contact, createWhatsAppUrl } from "@/config/contact";

const services = ["Architecture", "Interior Design", "Architecture + Interiors", "Renovation", "Other"] as const;

type FormValues = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  timeline: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues | "submit", string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  timeline: "",
  details: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (phoneDigits.length < 7 || phoneDigits.length > 15) errors.phone = "Enter a valid phone number.";
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address or leave this blank.";
  if (!values.location.trim()) errors.location = "Please enter the project location.";
  if (!values.service) errors.service = "Please choose a service.";
  if (!values.details.trim()) errors.details = "Please share a few details about your project.";
  return errors;
}

function buildLeadMessage(values: FormValues) {
  return [
    "Hi Design A'Line, I'm planning a project and would like to discuss your services.",
    "",
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    values.email ? `Email: ${values.email.trim()}` : null,
    `Project location: ${values.location.trim()}`,
    `Service required: ${values.service}`,
    values.timeline ? `Expected start: ${values.timeline}` : null,
    `Project details: ${values.details.trim()}`,
  ].filter(Boolean).join("\n");
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldClass = "w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#b8d1bc] focus:ring-0";

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined, submit: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const whatsappWindow = window.open("", "_blank");
    if (!whatsappWindow) {
      setErrors({ submit: "WhatsApp was blocked by your browser. Use the WhatsApp or Call option below instead." });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    whatsappWindow.opener = null;
    window.setTimeout(() => {
      whatsappWindow.location.href = createWhatsAppUrl(buildLeadMessage(values));
      setIsSubmitting(false);
    }, 350);
  }

  const contactItems = [
    { icon: Phone, label: "Phone", value: contact.phoneDisplay, href: contact.phoneHref },
    { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
    { icon: MapPin, label: "Studio", value: contact.address, href: contact.mapsHref },
    { icon: Clock, label: "Business Hours", value: "Mon–Fri, 9 AM–6 PM IST", href: undefined },
  ];

  return (
    <motion.section id="contact" className="bg-[#10291c] py-24 text-white sm:py-32" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div><span className="mb-5 block text-xs font-semibold uppercase tracking-[0.22em] text-[#a9c5ae]">Begin a project</span><h2 className="font-display text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl">Every meaningful space begins with a conversation.</h2></div>
          <p className="max-w-xl self-end text-lg leading-8 text-white/65">Tell us about your site, priorities & timeline. We&apos;ll prepare a WhatsApp message for you to review and send directly to Design A&apos;Line.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h3 className="mb-8 font-display text-3xl">Visit or speak with us</h3>
            <div className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="rounded-full border border-white/20 p-3 text-[#b8d1bc]"><Icon size={20} aria-hidden="true" /></span>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-white/45">{label}</h4>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="leading-relaxed text-white/75 hover:text-white">{value}</a> : <p className="text-white/75">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="lead-name" label="Name" required error={errors.name}><input id="lead-name" name="name" autoComplete="name" value={values.name} onChange={(e) => updateField("name", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "lead-name-error" : undefined} /></Field>
                <Field id="lead-phone" label="Phone Number" required error={errors.phone}><input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(e) => updateField("phone", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "lead-phone-error" : undefined} /></Field>
                <Field id="lead-email" label="Email" hint="Optional" error={errors.email}><input id="lead-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => updateField("email", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "lead-email-error" : undefined} /></Field>
                <Field id="lead-location" label="Project Location" required error={errors.location}><input id="lead-location" name="location" autoComplete="address-level2" placeholder="City or locality" value={values.location} onChange={(e) => updateField("location", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "lead-location-error" : undefined} /></Field>
                <Field id="lead-service" label="Service Required" required error={errors.service}><select id="lead-service" name="service" value={values.service} onChange={(e) => updateField("service", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "lead-service-error" : undefined}><option value="">Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></Field>
                <Field id="lead-timeline" label="Expected Project Start" hint="Optional"><select id="lead-timeline" name="timeline" value={values.timeline} onChange={(e) => updateField("timeline", e.target.value)} className={fieldClass}><option value="">Select a timeline</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>More than 12 months</option><option>Just exploring</option></select></Field>
              </div>

              <div className="mt-5"><Field id="lead-details" label="Project Details" required error={errors.details}><textarea id="lead-details" name="details" rows={5} placeholder="Project type, approximate size, and what you would like help with" value={values.details} onChange={(e) => updateField("details", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? "lead-details-error" : undefined} /></Field></div>

              {errors.submit && <div role="alert" className="mt-5 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800"><p>{errors.submit}</p><div className="mt-3 flex flex-wrap gap-4 font-semibold"><a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="underline">Open WhatsApp</a><a href={contact.phoneHref} className="underline">Call {contact.phoneDisplay}</a></div></div>}

              <p className="mt-5 text-sm text-white/50">WhatsApp will open with your details. Review the message, then tap Send—nothing is submitted automatically.</p>
              <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-[#dce8dd] px-8 py-4 font-semibold text-[#173b2a] transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70">{isSubmitting ? "Preparing WhatsApp…" : "Continue to WhatsApp"}{isSubmitting ? <MessageCircle className="ml-2" size={20} aria-hidden="true" /> : <Send className="ml-2" size={20} aria-hidden="true" />}</button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Field({ id, label, required, hint, error, children }: { id: string; label: string; required?: boolean; hint?: string; error?: string; children: ReactNode }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-medium">{label} {required && <span aria-hidden="true">*</span>}{hint && <span className="ml-1 font-normal text-gray-500">({hint})</span>}</label>{children}{error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">{error}</p>}</div>;
}
