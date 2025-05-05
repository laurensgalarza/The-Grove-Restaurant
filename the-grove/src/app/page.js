export default function Home() {
return(

  
    <body>
    <nav>
      <ul>
        <h3 style={{color:"floralwhite", fontVariant: "small-caps", marginLeft: "12px", marginTop: "12px", zIndex: "3"}}> The Grove</h3>
      
        <li><a href="#home" class="button">HOME</a></li>  
        <li><a href="#menu" class="button">MENU</a></li>
        <li><a href="#about" class="button">ABOUT</a></li>    
        <li><a href="#contact" class="button">CONTACT</a></li>
      
      </ul>
    </nav>

    <div className="container" id="home" style={{display: "flex" , flexDirection: "column", backgroundColor: "rgb(29, 50, 38)", width: "inherit"}}>

      <div className="hero-banner column">
        <h1 className="title">The Grove</h1>
        <p style={{color:"floralwhite", maxWidth: "1000px", paddingInline: "48px"}}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere porttitor litora imperdiet ligula sociosqu. Scelerisque urna senectus odio dui, sed non pulvinar? Dictum primis maximus malesuada nisl nisi.
        </p>
        <button className="open-cart" style={{width: "fit-content", paddingInline: "100px", alignSelf: "center"}}> Order Now </button>
      </div>

      <div class="gallery column">
            <img className="img" srcSet="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Grain Bowl"/>
            <img className="img" srcSet="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Pasta Dish" width="750"/>
            <img className="img" srcSet="https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pita Bread and Hummus"/>
            <img className="img" srcSet="https://images.pexels.com/photos/10067947/pexels-photo-10067947.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Pasta Dish"/>
            <img className="img" srcSet="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Caprese Salad"/>
    </div>
    </div>

    </body>


)
}