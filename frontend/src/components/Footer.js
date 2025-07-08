const Footer = () => {
  return (
    <div className="Footer-Layout">
      <div className="Copyright">
        <p>© {new Date().getFullYear()} Swaadaahaari. All rights reserved.</p>
      </div>
      <div className="Links">
        <div>
          <a href="/termsOfServices">Terms of services</a>
        </div>

        <div>
          <a href="/quickCommerceVersion">Get dilivery in 10 minutes</a>
        </div>

        <div>
          {" "}
          <a href="/quickCommerceVersion">Get dilivery in 10 minutes</a>
        </div>

        <div>
          <a href="/diliveryPartenrs">Become an dilviery partner</a>
        </div>

        <div>
          <a href="/parentalCompany">See aquisation</a>
        </div>
      </div>
      <div className="Adrress">
        Shivtej colony, Moshi, Pune, Postal-Code : 442106
      </div>
      <div className="Contact">Swaadaahaari@gmail.com, Ph.No:9873763245</div>
    </div>
  );
};

export default Footer;
