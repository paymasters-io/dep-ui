import { useEffect, useState } from "react";

const EmailForm = ({
  reason,
  updateSubmit,
  className,
  name,
}: {
  reason: string;
  updateSubmit: (value: object) => void;
  className?: string;
  name?: string;
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateSubmit({ email });
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setEmail("");
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`newsletter-form ${className}`}
      role="form"
      aria-label={name || "newsletter form"}
    >
      <div className="form-header">
        {reason === "subscribe"
          ? "Subscribe to our news letter"
          : "Enter your email to get join the waitlist"}
      </div>
      <div className="form-group">
        <div className="form-control">
          <input
            id="email"
            data-testid="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            type="text"
            placeholder="Enter your Email"
            required
          />
        </div>
        <button disabled={submitted} className="cta">
          {reason === "subscribe" ? "Subscribe" : "Join Waitlist"}
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
