import React from "react";
function Footer(){
    return(
      <footer>
          <div className="container-fluid text-center" style={{backgroundColor:"#A3E1DC"}}>
              <div className="py-5">
                  <h2 className="text-light">Intrested in working with me ?</h2>
                  <button className="btn btn-outline-dark btn-lg mt-3">let's talk</button>
              </div>
              <div className="row">
                  <div className="col-12 col-md-6 py-3">
                      <h5 className="text-warning pb-3">More Links</h5>
                      <a href="/" className="text-dark d-block">Blog</a>
                      <a href="/" className="text-dark d-block">Home</a>
                      <a href="/" className="text-dark d-block">Contact me</a>
                      <a href="/" className="text-dark d-block">Write a recomendation <i className="fas fa-heart text-light"></i></a>

                  </div>
                  <div className="col-12 col-md-6 py-3">
                      <h5 className="text-warning pb-3">Social</h5>
                      <a href="/"><i className="fab fa-linkedin text-dark h1 d-block"></i></a>
                      <a href="/"><i className="fab fa-github text-dark h1 d-block"></i></a>
                      <a href="/"><i className="fas fa-envelope text-dark h1 d-block"></i></a>
                  </div>
              </div>
              <div className="text-dark py-3">
                  <p>
                  Copyright&copy; Ambika Puvvula
                  <script>
                  document.write(new Date().getFullYear());
                  </script>
                  </p>
              </div>
          </div>
      </footer>  
    );
}
export default Footer;