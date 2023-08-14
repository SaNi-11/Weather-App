function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer bg-gray-400 text-indigo-700 transition ease-in-out delay-550 dark:bg-gray-800 dark:text-indigo-400 p-10 text-center justify-self-auto ">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved Nikola Kuruc</p>
      </div>
    </footer>
  );
}

export default Footer;
