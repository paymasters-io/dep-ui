const SiteHeader = ({
  children,
  fullWidth = false,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <header className="site-header">
      <div className={`wrapper ${fullWidth ? "!max-w-full" : ""}`}>
        {children}
      </div>
    </header>
  );
};

export default SiteHeader;
