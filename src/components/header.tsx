export const Header = () => {
  return (
    <header>
      <div className="bg-primary w-full">
        {/* Desktop */}
        <img
          alt="Banner"
          src="/images/bg-header-desktop.svg"
          className="hidden h-40 w-full object-cover md:block"
        />

        {/* Mobile */}
        <img
          alt="Banner"
          src="/images/bg-header-mobile.svg"
          className="h-40 w-full object-cover md:hidden"
        />
      </div>
    </header>
  );
};
