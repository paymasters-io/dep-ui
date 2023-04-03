const SiteHeader = ({
  children,
  fullWidth = false,
  className,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}) => {
  return (
    <header className={`site-header ${className}`}>
      <div className={`wrapper ${fullWidth ? "!max-w-full" : ""}`}>
        {children}
      </div>
    </header>
  );
};

export default SiteHeader;
