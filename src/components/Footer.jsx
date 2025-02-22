const Footer = () => {
  return (
    <footer className="p-6 text-center text-slate-300 bg-[linear-gradient(to_right,#1e1e1e_70%,#051c5f)]">
      <p className="text-xl">
        &copy; {new Date().getFullYear()} Priyanshu Gangwar. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
