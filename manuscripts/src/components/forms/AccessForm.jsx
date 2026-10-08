import { useState } from "react";
import Button from "@/components/ui/Button";

export default function AccessForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-body-md text-body-md text-secondary-fixed" role="status">
        Thank you for connecting with Manuscripts. We&apos;ll be in touch at {email}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col items-center gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email address"
        className="w-full rounded-full border border-outline-variant/30 bg-on-primary/10 px-5 py-3.5 text-body-sm text-on-primary transition-colors placeholder:text-outline-variant focus:border-secondary focus:outline-none"
      />
      <Button type="submit" variant="mint" className="w-full sm:w-auto">
        Request Access
      </Button>
    </form>
  );
}
