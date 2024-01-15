export const Header = () => {
  return (
    <header>
      <div className="w-full bg-primary">
        {/* Desktop */}
        <img
          alt="Banner"
          src="/images/bg-header-desktop.svg"
          className="hidden h-[158px] w-full object-cover md:block"
        />

        {/* Mobile */}
        <img
          alt="Banner"
          src="/images/bg-header-mobile.svg"
          className="h-[158px] w-full object-cover md:hidden"
        />
      </div>
    </header>
  );
};
