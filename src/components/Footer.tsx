const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhay Gaur. All rights reserved.
        </p>
        <p className="font-body text-sm text-muted-foreground">
          Designed & Built with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
